import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError, AxiosResponse } from "axios";
import { axios } from "../../components/projects/config/AxiosConfig";
import { ApiErrorResponsePayload } from "../../types/api/ApiErrorResponse";
import {
  EditTaskRequestPayload,
  EditTaskResponseCallback,
  EditTaskResponsePayload,
} from "../../types/api/EditTask";
import {
  EditTaskImageRequestPayload,
  EditTaskImageResponseCallback,
  EditTaskImageResponsePayload,
} from "../../types/api/EditTaskImage";
import {
  FetchTaskRequestPayload,
  FetchTaskResponseCallback,
  FetchTaskResponsePayload,
} from "../../types/api/FetchTask";
import {
  FetchTasksRequestPayload,
  FetchTasksResponseCallback,
  FetchTasksResponsePayload,
} from "../../types/api/FetchTasks";
import {
  RegisterTaskRequestPayload,
  RegisterTaskResponseCallback,
  RegisterTaskResponsePayload,
} from "../../types/api/RegisterTask";
import {
  RemoveTaskRequestPayload,
  RemoveTaskResponseCallback,
  RemoveTaskResponsePayload,
} from "../../types/api/RemoveTask";
import { Task } from "../../types/entity/Task";
import { TaskEntity } from "../../types/entity/TaskEntity";
import { FeatureKey } from "../featureKey";

/**
 * Action to reset the task store
 */
export const resetTaskAction = createAction(
  `${FeatureKey.tasks}/resetTaskAction`
);

/**
 * Action to fetch multiple tasks
 */
export const fetchTasksAction = createAsyncThunk<
  // return type
  FetchTasksResponsePayload,
  // argument type
  {
    payload: FetchTasksRequestPayload;
    callback?: FetchTasksResponseCallback;
  },
  // thunkApi type
  { rejectValue: ApiErrorResponsePayload }
>(
  `${FeatureKey.tasks}/fetchTasksAction`,
  async (
    {
      payload,
      callback,
    }: {
      payload: FetchTasksRequestPayload;
      callback?: FetchTasksResponseCallback;
    },
    thunkApi
  ) => {
    const { keyword = "" } = payload;

    const queryStrings: string[] = [];
    if (keyword) {
      // Use like filter
      // @see https://github.com/typicode/json-server#operators
      queryStrings.push(`title_like=${encodeURIComponent(keyword)}`);
    }
    const orderBy = { _sort: "id", _order: "asc" };
    for (const [key, value] of Object.entries(orderBy)) {
      queryStrings.push(`${key}=${value}`);
    }
    const queryString =
      1 <= queryStrings.length ? `?${queryStrings.join("&")}` : "";

    const url = `/tasks${queryString}`;
    return await axios
      .get(url)
      .then((response: AxiosResponse<Task[]>) => {
        // Transform response
        const taskEntities: TaskEntity[] = { ...response.data };
        callback?.success?.({ taskEntities });
        return { taskEntities };
      })
      .catch((error: AxiosError<ApiErrorResponsePayload>) => {
        callback?.failure?.(error);
        // In reducer.ts action.rejected, pass api error json to action.payload.
        // `response!` is because the axioms interceptor checks for undefined in error.response,
        // so it is guaranteed not to be undefined here.
        return thunkApi.rejectWithValue(error.response!.data);
      });
  }
);

/**
 * Action to fetch one task
 */
export const fetchTaskAction = createAsyncThunk<
  FetchTaskResponsePayload,
  {
    payload: FetchTaskRequestPayload;
    callback?: FetchTaskResponseCallback;
  },
  { rejectValue: ApiErrorResponsePayload }
>(
  `${FeatureKey.tasks}/fetchTaskAction`,
  async (
    {
      payload,
      callback,
    }: {
      payload: FetchTaskRequestPayload;
      callback?: FetchTaskResponseCallback;
    },
    thunkApi
  ) => {
    const { id } = payload;
    const url = `/tasks/${encodeURIComponent(id)}`;
    return await axios
      .get(url)
      .then((response: AxiosResponse<Task>) => {
        const taskEntity: TaskEntity = { ...response.data };
        callback?.success?.({ taskEntity });
        return { taskEntity };
      })
      .catch((error: AxiosError<ApiErrorResponsePayload>) => {
        callback?.failure?.(error);
        return thunkApi.rejectWithValue(error.response!.data);
      });
  }
);

/**
 * Action to register one task
 */
export const registerTaskAction = createAsyncThunk<
  RegisterTaskResponsePayload,
  {
    payload: RegisterTaskRequestPayload;
    callback?: RegisterTaskResponseCallback;
  },
  { rejectValue: ApiErrorResponsePayload }
>(
  `${FeatureKey.tasks}/registerTaskAction`,
  async (
    {
      payload,
      callback,
    }: {
      payload: RegisterTaskRequestPayload;
      callback?: RegisterTaskResponseCallback;
    },
    thunkApi
  ) => {
    const url = `/tasks`;
    return await axios
      .post(url, { ...payload, createdAt: new Date(), updatedAt: new Date() })
      .then((response: AxiosResponse<Task>) => {
        const taskEntity: TaskEntity = { ...response.data };
        callback?.success?.({ taskEntity });
        return { taskEntity };
      })
      .catch((error: AxiosError<ApiErrorResponsePayload>) => {
        callback?.failure?.(error);
        return thunkApi.rejectWithValue(error.response!.data);
      });
  }
);

/**
 * Action to edit one task
 */
export const editTaskAction = createAsyncThunk<
  EditTaskResponsePayload,
  {
    payload: EditTaskRequestPayload;
    callback?: EditTaskResponseCallback;
  },
  { rejectValue: ApiErrorResponsePayload }
>(
  `${FeatureKey.tasks}/editTaskAction`,
  async (
    {
      payload,
      callback,
    }: {
      payload: EditTaskRequestPayload;
      callback?: EditTaskResponseCallback;
    },
    thunkApi
  ) => {
    const url = `/tasks/${payload.id}`;
    return await axios
      .put(url, { ...payload, updatedAt: new Date() })
      .then((response: AxiosResponse<Task>) => {
        const taskEntity: TaskEntity = { ...response.data };
        callback?.success?.({ taskEntity });
        return { taskEntity };
      })
      .catch((error: AxiosError<ApiErrorResponsePayload>) => {
        callback?.failure?.(error);
        return thunkApi.rejectWithValue(error.response!.data);
      });
  }
);

/**
 * Action to remove one task
 */
export const removeTaskAction = createAsyncThunk<
  RemoveTaskResponsePayload,
  {
    payload: RemoveTaskRequestPayload;
    callback?: RemoveTaskResponseCallback;
  },
  { rejectValue: ApiErrorResponsePayload }
>(
  `${FeatureKey.tasks}/removeTaskAction`,
  async (
    {
      payload,
      callback,
    }: {
      payload: RemoveTaskRequestPayload;
      callback?: RemoveTaskResponseCallback;
    },
    thunkApi
  ) => {
    const { id } = payload;
    const url = `/tasks/${encodeURIComponent(id)}`;
    return await axios
      .delete(url)
      .then((response: AxiosResponse<void>) => {
        callback?.success?.();
        return response.data;
      })
      .catch((error: AxiosError<ApiErrorResponsePayload>) => {
        callback?.failure?.(error);
        return thunkApi.rejectWithValue(error.response!.data);
      });
  }
);

/**
 * Action to edit one task image
 */
export const editTaskImageAction = createAsyncThunk<
  EditTaskImageResponsePayload,
  {
    payload: EditTaskImageRequestPayload;
    callback?: EditTaskImageResponseCallback;
  },
  { rejectValue: ApiErrorResponsePayload }
>(
  `${FeatureKey.tasks}/editTaskImageAction`,
  async (
    {
      payload,
      callback,
    }: {
      payload: EditTaskImageRequestPayload;
      callback?: EditTaskImageResponseCallback;
    },
    thunkApi
  ) => {
    const { id, imageDataUri } = payload;
    const url = `/tasks/${encodeURIComponent(id)}`;
    return await axios
      .patch(url, {
        imageDataUri,
        updatedAt: new Date(),
      })
      .then((response: AxiosResponse<Task>) => {
        const taskEntity: TaskEntity = { ...response.data };
        callback?.success?.({ taskEntity });
        return { taskEntity };
      })
      .catch((error: AxiosError<ApiErrorResponsePayload>) => {
        callback?.failure?.(error);
        return thunkApi.rejectWithValue(error.response!.data);
      });
  }
);

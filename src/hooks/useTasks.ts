import { unwrapResult } from "@reduxjs/toolkit";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  allTasksSelector,
  editTaskAction,
  editTaskImageAction,
  errorSelector,
  fetchTaskAction,
  fetchTasksAction,
  isLoadingSelector,
  registerTaskAction,
  removeTaskAction,
  resetTaskAction,
  taskSelector,
} from "../store/tasks";
import {
  EditTaskRequestPayload,
  EditTaskResponseCallback,
  EditTaskResponsePayload,
} from "../types/api/EditTask";
import {
  EditTaskImageRequestPayload,
  EditTaskImageResponseCallback,
  EditTaskImageResponsePayload,
} from "../types/api/EditTaskImage";
import {
  FetchTaskRequestPayload,
  FetchTaskResponseCallback,
  FetchTaskResponsePayload,
} from "../types/api/FetchTask";
import {
  FetchTasksRequestPayload,
  FetchTasksResponseCallback,
  FetchTasksResponsePayload,
} from "../types/api/FetchTasks";
import {
  RegisterTaskRequestPayload,
  RegisterTaskResponseCallback,
  RegisterTaskResponsePayload,
} from "../types/api/RegisterTask";
import {
  RemoveTaskRequestPayload,
  RemoveTaskResponseCallback,
  RemoveTaskResponsePayload,
} from "../types/api/RemoveTask";
import { TaskId } from "../types/entity/Task";
import { useAppDispatch } from "./useAppDispatch";

/**
 * Hooks for task
 * @author treetips
 */
export const useTasks = () => {
  const { dispatch } = useAppDispatch();
  const taskEntities = useSelector(allTasksSelector);
  const taskEntity = useSelector(taskSelector);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);

  /**
   * Reset the task store
   */
  const resetTask = useCallback((): void => {
    dispatch(resetTaskAction());
  }, [dispatch]);

  /**
   * Fetch multiple task
   * @param payload request payload
   * @param callback response callback functions
   */
  const fetchTasks = useCallback(
    async (
      payload?: FetchTasksRequestPayload,
      callback?: FetchTasksResponseCallback
    ): Promise<FetchTasksResponsePayload> => {
      const args = payload ? { payload } : { payload: { keyword: undefined } };
      return dispatch(fetchTasksAction({ ...args, callback })).then(
        unwrapResult
      );
    },
    [dispatch]
  );

  /**
   * Fetch one task
   * @param payload request payload
   * @param callback response callback functions
   */
  const fetchTask = useCallback(
    async (
      payload: FetchTaskRequestPayload,
      callback?: FetchTaskResponseCallback
    ): Promise<FetchTaskResponsePayload> => {
      return dispatch(fetchTaskAction({ payload, callback })).then(
        unwrapResult
      );
    },
    [dispatch]
  );

  /**
   * Register one task
   * @param payload request payload
   * @param callback response callback functions
   */
  const registerTask = useCallback(
    async (
      payload: RegisterTaskRequestPayload,
      callback?: RegisterTaskResponseCallback
    ): Promise<RegisterTaskResponsePayload> => {
      return dispatch(registerTaskAction({ payload, callback })).then(
        unwrapResult
      );
    },
    [dispatch]
  );

  /**
   * Edit one task
   * @param payload request payload
   * @param callback response callback functions
   */
  const editTask = useCallback(
    async (
      payload: EditTaskRequestPayload,
      callback?: EditTaskResponseCallback
    ): Promise<EditTaskResponsePayload> => {
      return dispatch(editTaskAction({ payload, callback })).then(unwrapResult);
    },
    [dispatch]
  );

  /**
   * Remove one task
   * @param payload request payload
   * @param callback response callback functions
   */
  const removeTask = useCallback(
    async (
      payload: RemoveTaskRequestPayload,
      callback?: RemoveTaskResponseCallback
    ): Promise<RemoveTaskResponsePayload> => {
      return dispatch(removeTaskAction({ payload, callback })).then(
        unwrapResult
      );
    },
    [dispatch]
  );

  /**
   * Edit one task iomage
   * @param payload request payload
   * @param callback response callback functions
   */
  const editTaskImage = useCallback(
    async (
      payload: EditTaskImageRequestPayload,
      callback?: EditTaskImageResponseCallback
    ): Promise<EditTaskImageResponsePayload> => {
      return dispatch(editTaskImageAction({ payload, callback })).then(
        unwrapResult
      );
    },
    [dispatch]
  );

  /**
   * Convert url path parameters to task id
   * @param arg.id path parameter
   */
  const convertTaskId = useCallback(
    (arg: {
      id?: string;
    }): {
      taskId?: TaskId;
      convertError: boolean;
    } => {
      const { id } = arg;
      if (!id || !/^\d+$/.test(id)) {
        return { convertError: true };
      }
      return { taskId: Number(id), convertError: false };
    },
    []
  );

  return {
    resetTask,
    fetchTasks,
    fetchTask,
    registerTask,
    editTask,
    removeTask,
    editTaskImage,
    convertTaskId,
    taskEntities,
    taskEntity,
    isLoading,
    error,
  } as const;
};

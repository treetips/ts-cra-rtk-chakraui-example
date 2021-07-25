import { ActionReducerMapBuilder, createReducer } from "@reduxjs/toolkit";
import {
  editTaskAction,
  editTaskImageAction,
  fetchTaskAction,
  fetchTasksAction,
  registerTaskAction,
  removeTaskAction,
  resetTaskAction,
} from "./action";
import { adapter, initialState, TaskState } from "./state";

/**
 * Task reducer
 * @author treetips
 */
export const taskReducer = createReducer(
  initialState,
  (builder: ActionReducerMapBuilder<TaskState>) =>
    builder
      //-------------------------------------------------------------------------------
      .addCase(resetTaskAction, () => initialState)
      //-------------------------------------------------------------------------------
      .addCase(fetchTasksAction.pending, (state) => {
        return { ...state, isLoading: true, error: undefined };
      })
      .addCase(fetchTasksAction.fulfilled, (state, action) => {
        const { taskEntities } = action.payload;
        return {
          ...adapter.setAll({ ...state }, taskEntities),
          isLoading: false,
          error: undefined,
        };
      })
      .addCase(fetchTasksAction.rejected, (state, action) => {
        const { payload } = action;
        return { ...state, isLoading: false, error: payload };
      })
      //-------------------------------------------------------------------------------
      .addCase(fetchTaskAction.pending, (state, action) => {
        const { payload } = action.meta.arg;
        const { id } = payload;
        return { ...state, selectedId: id, isLoading: true, error: undefined };
      })
      .addCase(fetchTaskAction.fulfilled, (state, action) => {
        const { taskEntity } = action.payload;
        const { id } = taskEntity;
        return {
          ...adapter.upsertOne({ ...state }, taskEntity),
          selectedId: id,
          isLoading: false,
          error: undefined,
        };
      })
      .addCase(fetchTaskAction.rejected, (state, action) => {
        const { payload, meta } = action;
        const { id } = meta.arg.payload;
        return { ...state, selectedId: id, isLoading: false, error: payload };
      })
      //-------------------------------------------------------------------------------
      .addCase(registerTaskAction.pending, (state, action) => {
        return { ...state, isLoading: true, error: undefined };
      })
      .addCase(registerTaskAction.fulfilled, (state, action) => {
        const { taskEntity } = action.payload;
        const { id } = taskEntity;
        return {
          ...adapter.addOne({ ...state }, taskEntity),
          selectedId: id,
          isLoading: false,
          error: undefined,
        };
      })
      .addCase(registerTaskAction.rejected, (state, action) => {
        const { payload } = action;
        return { ...state, isLoading: false, error: payload };
      })
      //-------------------------------------------------------------------------------
      .addCase(editTaskAction.pending, (state, action) => {
        const { payload } = action.meta.arg;
        const { id } = payload;
        return { ...state, selectedId: id, isLoading: true, error: undefined };
      })
      .addCase(editTaskAction.fulfilled, (state, action) => {
        const { taskEntity } = action.payload;
        const { id } = taskEntity;
        return {
          ...adapter.updateOne({ ...state }, { id, changes: taskEntity }),
          selectedId: id,
          isLoading: false,
          error: undefined,
        };
      })
      .addCase(editTaskAction.rejected, (state, action) => {
        const { meta, payload } = action;
        const { id } = meta.arg.payload;
        return { ...state, selectedId: id, isLoading: false, error: payload };
      })
      //-------------------------------------------------------------------------------
      .addCase(removeTaskAction.pending, (state, action) => {
        const { payload } = action.meta.arg;
        const { id } = payload;
        return { ...state, selectedId: id, isLoading: true, error: undefined };
      })
      .addCase(removeTaskAction.fulfilled, (state, action) => {
        const { payload } = action.meta.arg;
        const { id } = payload;
        return {
          ...adapter.removeOne({ ...state }, id),
          selectedId: id,
          isLoading: false,
          error: undefined,
        };
      })
      .addCase(removeTaskAction.rejected, (state, action) => {
        const { meta, payload } = action;
        const { id } = meta.arg.payload;
        return { ...state, selectedId: id, isLoading: false, error: payload };
      })
      //-------------------------------------------------------------------------------
      .addCase(editTaskImageAction.pending, (state, action) => {
        const { payload } = action.meta.arg;
        const { id } = payload;
        return { ...state, selectedId: id, isLoading: true, error: undefined };
      })
      .addCase(editTaskImageAction.fulfilled, (state, action) => {
        const { taskEntity } = action.payload;
        const { id } = taskEntity;
        return {
          ...adapter.updateOne(
            { ...state },
            {
              id,
              changes: { imageDataUri: taskEntity.imageDataUri },
            }
          ),
          selectedId: id,
          isLoading: false,
          error: undefined,
        };
      })
      .addCase(editTaskImageAction.rejected, (state, action) => {
        const { meta, payload } = action;
        const { id } = meta.arg.payload;
        return { ...state, selectedId: id, isLoading: false, error: payload };
      })
);

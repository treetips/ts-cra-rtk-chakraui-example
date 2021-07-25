import { createEntityAdapter, EntityState } from "@reduxjs/toolkit";
import { ApiErrorResponsePayload } from "../../types/api/ApiErrorResponse";
import { TaskEntity } from "../../types/entity/TaskEntity";

export interface TaskState extends EntityState<TaskEntity> {
  isLoading: boolean;
  selectedId?: number;
  error?: ApiErrorResponsePayload;
}

export const adapter = createEntityAdapter<TaskEntity>({
  selectId: (taskEntity: TaskEntity) => taskEntity.id,
});

export const initialState: TaskState = adapter.getInitialState({
  isLoading: false,
  selectedId: undefined,
  error: undefined,
});

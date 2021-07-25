import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { RootState } from "../reducers";
import { adapter, TaskState } from "./state";

const { selectAll, selectEntities } = adapter.getSelectors();

const featureStateSelector = (state: RootState) => state.tasks;

const entitiesSelector = createDraftSafeSelector(
  featureStateSelector,
  selectEntities
);

/**
 * Loading selector
 */
export const isLoadingSelector = createDraftSafeSelector(
  featureStateSelector,
  (state: TaskState) => state?.isLoading
);

/**
 * Task id selector
 */
export const selectedIdSelector = createDraftSafeSelector(
  featureStateSelector,
  (state: TaskState) => state?.selectedId
);

/**
 * Task error selector
 */
export const errorSelector = createDraftSafeSelector(
  featureStateSelector,
  (state: TaskState) => state?.error
);

/**
 * All tasks selector
 */
export const allTasksSelector = createDraftSafeSelector(
  featureStateSelector,
  selectAll
);

/**
 * One task selector
 */
export const taskSelector = createDraftSafeSelector(
  entitiesSelector,
  selectedIdSelector,
  (entities, id) => (id ? entities[id] || null : null)
);

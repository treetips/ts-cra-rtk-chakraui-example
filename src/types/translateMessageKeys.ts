/**
 * Union type of translation key
 * @author treetips
 */
export type TranslateMessageKeys =
  | "test.hello"
  //---------------------------------------------
  // Label
  //---------------------------------------------
  | "label.main.title"
  | "label.menu.group.title"
  | "label.menu.group.task"
  | "label.menu.group.operation-check"
  | "label.menu.group.tasks"
  | "label.menu.group.docs"
  | "label.page.title"
  | "label.page.description"
  | "label.required"
  | "label.reset"
  | "label.cancel"
  | "label.login"
  | "label.logout"
  | "label.source"
  | "label.addition"
  | "label.subtraction"
  | "label.multiplication"
  | "label.division"
  | "label.now-logged-in"
  | "label.available"
  | "label.not-available"
  | "label.create-time"
  | "label.update-time"
  | "label.home"
  | "label.task"
  | "label.actions"
  | "label.search"
  | "label.list"
  | "label.detail"
  | "label.register"
  | "label.edit"
  | "label.remove"
  | "label.complete.register"
  | "label.complete.edit"
  | "label.complete.remove"
  | "label.operation.successful"
  | "label.operation.failed"
  //---------------------------------------------
  // Label: Page
  //---------------------------------------------
  // page title
  | "label.page.title.main.home"
  | "label.page.title.main.technical-features"
  | "label.page.title.task.list"
  | "label.page.title.task.detail"
  | "label.page.title.task.register"
  | "label.page.title.task.edit"
  | "label.page.title.task.remove"
  | "label.page.title.debug.redux"
  | "label.page.title.debug.feature"
  | "label.page.title.error.error"
  // page description
  | "label.page.description.main.home"
  | "label.page.description.main.technical-features"
  | "label.page.description.task.list"
  | "label.page.description.task.detail"
  | "label.page.description.task.register"
  | "label.page.description.task.edit"
  | "label.page.description.debug.redux"
  | "label.page.description.debug.feature"
  | "label.page.description.error.error"
  // meta title
  | "label.meta.title.main.home"
  | "label.meta.title.main.technical-features"
  | "label.meta.title.task.list"
  | "label.meta.title.task.detail"
  | "label.meta.title.task.register"
  | "label.meta.title.task.edit"
  | "label.meta.title.debug.redux"
  | "label.meta.title.debug.feature"
  | "label.meta.title.error.error"
  // meta description
  | "label.meta.description.main.home"
  | "label.meta.description.main.technical-features"
  | "label.meta.description.task.list"
  | "label.meta.description.task.detail"
  | "label.meta.description.task.register"
  | "label.meta.description.task.edit"
  | "label.meta.description.debug.redux"
  | "label.meta.description.debug.feature"
  | "label.meta.description.error.error"
  //---------------------------------------------
  // Label: Login
  //---------------------------------------------
  | "label.login.username"
  | "label.login.password"
  //---------------------------------------------
  // Label: Task
  //---------------------------------------------
  | "label.task.id"
  | "label.task.title"
  | "label.task.description"
  | "label.task.status"
  | "label.task.image"
  | "label.task.search"
  | "label.task.register"
  | "label.task.search.result"
  | "label.task.search.description"
  | "label.task.search.required"
  | "label.task.edit"
  | "label.task.remove"
  | "label.task.remove.confirm"
  | "label.task.section.task-information"
  | "label.task.section.basic-information"
  | "label.task.section.image"
  //---------------------------------------------
  // Validation Error
  //---------------------------------------------
  | "validation.required"
  | "validation.max"
  | "validation.numeric"
  | "validation.range"
  | "validation.boolean"
  //---------------------------------------------
  // Error
  //---------------------------------------------
  | "error.login.required"
  | "error.login.failure"
  | "error.healthcheck"
  | "error.page.notfound"
  | "error.service-unavailable"
  | "error.internal-server-error"
  | "error.unknown-error";

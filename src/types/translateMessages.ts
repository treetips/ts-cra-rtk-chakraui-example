import { LanguageCode } from "./Language";

/**
 * Translation dictionary for i18n
 * @author treetips
 */
export const translateMessages = {
  [LanguageCode["ja-JP"]]: {
    "test.hello": "こんにちは {name} ！",
    //---------------------------------------------
    // Label
    //---------------------------------------------
    "label.main.title": "サンプルサイト",
    "label.menu.group.title": "メイン",
    "label.menu.group.task": "タスク管理",
    "label.menu.group.operation-check": "動作確認用",
    "label.menu.group.tasks": "課題",
    "label.menu.group.docs": "ドキュメント",
    "label.page.title": "タスク管理システム",
    "label.page.description": "タスク機能を利用する場合はログインして下さい。",
    "label.required": "必須",
    "label.reset": "リセット",
    "label.cancel": "キャンセル",
    "label.login": "ログイン",
    "label.logout": "ログアウト",
    "label.source": "出典",
    "label.addition": "足し算",
    "label.subtraction": "引き算",
    "label.multiplication": "掛け算",
    "label.division": "割り算",
    "label.now-logged-in": "現在ログイン中です。",
    "label.available": "有り",
    "label.not-available": "無し",
    "label.create-time": "作成日時",
    "label.update-time": "更新日時",
    "label.home": "ホーム",
    "label.task": "タスク",
    "label.actions": "アクション",
    "label.search": "検索",
    "label.list": "一覧",
    "label.detail": "詳細",
    "label.register": "登録",
    "label.edit": "編集",
    "label.remove": "削除",
    "label.complete.register": "登録完了",
    "label.complete.edit": "編集完了",
    "label.complete.remove": "削除完了",
    "label.operation.successful": "{name}の{action}に成功しました。",
    "label.operation.failed": "{name}の{action}に失敗しました。",
    //---------------------------------------------
    // Label: Page
    //---------------------------------------------
    // page title
    "label.page.title.main.home": "ホーム",
    "label.page.title.main.technical-features": "技術要素",
    "label.page.title.task.list": "タスク一覧",
    "label.page.title.task.detail": "タスク詳細",
    "label.page.title.task.register": "タスク登録",
    "label.page.title.task.edit": "タスク編集",
    "label.page.title.task.remove": "タスク削除",
    "label.page.title.debug.redux": "Debug Redux",
    "label.page.title.debug.feature": "Debug 機能",
    "label.page.title.error.error": "エラー",
    // page description
    "label.page.description.main.home": "ホーム",
    "label.page.description.main.technical-features":
      "このサイト使われている技術要素について。",
    "label.page.description.task.list":
      "タスクを絞り込んだりして、タスクの一覧を閲覧する事ができます。",
    "label.page.description.task.detail": "タスクの詳細情報です。",
    "label.page.description.task.register": "タスクを1件登録します。",
    "label.page.description.task.edit": "タスクを1件編集します。",
    "label.page.description.debug.redux": "Redux用デバッグページです。",
    "label.page.description.debug.feature": "機能テスト用デバッグページです。",
    "label.page.description.error.error": "エラーページです。",
    // meta title
    "label.meta.title.main.home": "ホーム | {siteName}",
    "label.meta.title.main.technical-features": "技術要素 | {siteName}",
    "label.meta.title.task.list": "タスク一覧 | {siteName}",
    "label.meta.title.task.detail": "タスク詳細 | {siteName}",
    "label.meta.title.task.register": "タスク登録 | {siteName}",
    "label.meta.title.task.edit": "タスク編集 | {siteName}",
    "label.meta.title.debug.redux": "Debug Redux | {siteName}",
    "label.meta.title.debug.feature": "Debug 機能 | {siteName}",
    "label.meta.title.error.error": "エラー | {siteName}",
    // meta description
    "label.meta.description.main.home": "ホーム",
    "label.meta.description.main.technical-features":
      "このサイト使われている技術要素について。",
    "label.meta.description.task.list":
      "タスクを絞り込んだりして、タスクの一覧を閲覧する事ができます。",
    "label.meta.description.task.detail": "タスクの詳細情報です。",
    "label.meta.description.task.register": "タスクを1件登録します。",
    "label.meta.description.task.edit": "タスクを1件編集します。",
    "label.meta.description.debug.redux": "Redux用デバッグページです。",
    "label.meta.description.debug.feature": "機能テスト用デバッグページです。",
    "label.meta.description.error.error": "エラーページです。",
    //---------------------------------------------
    // Label: Login
    //---------------------------------------------
    "label.login.username": "ユーザー名",
    "label.login.password": "パスワード",
    //---------------------------------------------
    // Label: Task
    //---------------------------------------------
    "label.task.id": "タスクID",
    "label.task.title": "タスクタイトル",
    "label.task.description": "タスク説明",
    "label.task.status": "タスクステータス",
    "label.task.image": "タスク画像",
    "label.task.search": "タスクを検索する",
    "label.task.register": "タスクを登録する",
    "label.task.search.result": "{searchResultNumber}件 ヒットしました",
    "label.task.search.description": "タスクタイトルを部分一致検索できます",
    "label.task.search.required": "タスクタイトルを入力して下さい",
    "label.task.edit": "タスク編集",
    "label.task.remove": "タスク削除",
    "label.task.remove.confirm":
      "タスクID=[{id}]を削除します。よろしいですか？",
    "label.task.section.task-information": "タスク情報",
    "label.task.section.basic-information": "基本情報",
    "label.task.section.image": "タスク画像",
    //---------------------------------------------
    // Validation Error
    //---------------------------------------------
    "validation.required": "{name}の入力は必須です。",
    "validation.max": "{name}は{number}文字以内で入力して下さい。",
    "validation.numeric": "{name}は数値で入力して下さい。",
    "validation.range": "タスク価格は{min}以上{max}以内で入力して下さい。",
    "validation.boolean": "{name}はtrueかfalseで入力して下さい。",
    //---------------------------------------------
    // Error
    //---------------------------------------------
    "error.login.required": "ログインしていません。",
    "error.login.failure": "ユーザー名またはパスワードが間違っています。",
    "error.healthcheck": "APIサーバが起動していません。",
    "error.page.notfound": "お探しのページは見つかりませんでした",
    "error.service-unavailable": "現在サーバーが混み合っています",
    "error.internal-server-error": "システム障害が発生しました",
    "error.unknown-error": "不明なエラーが発生しました",
  },
  [LanguageCode["en-US"]]: {
    "test.hello": "Hello {name} !",
    //---------------------------------------------
    // Label
    //---------------------------------------------
    "label.main.title": "Sample Site",
    "label.menu.group.title": "Main",
    "label.menu.group.task": "Task Management",
    "label.menu.group.operation-check": "Operation check",
    "label.menu.group.tasks": "Tasks",
    "label.menu.group.docs": "Documents",
    "label.page.title": "Task Management System",
    "label.page.description": "Please login to use the task management system.",
    "label.required": "Required",
    "label.reset": "Reset",
    "label.cancel": "Cancel",
    "label.login": "Login",
    "label.logout": "Logout",
    "label.source": "Source",
    "label.addition": "Addition",
    "label.subtraction": "Subtraction",
    "label.multiplication": "Multiplication",
    "label.division": "Division",
    "label.now-logged-in": "You are now logged in.",
    "label.available": "Available",
    "label.not-available": "Not available",
    "label.create-time": "Create Time",
    "label.update-time": "Update Time",
    "label.home": "Home",
    "label.task": "Task",
    "label.actions": "Actions",
    "label.search": "Search",
    "label.list": "List",
    "label.detail": "Detail",
    "label.register": "Registration",
    "label.edit": "Edit",
    "label.remove": "Remove",
    "label.complete.register": "Registration Complete",
    "label.complete.edit": "Edit Complete",
    "label.complete.remove": "Remove Complete",
    "label.operation.successful": "The {name} {action} was successful.",
    "label.operation.failed": "{name} {action} failed.",
    //---------------------------------------------
    // Label: Page
    //---------------------------------------------
    // page title
    "label.page.title.main.home": "Home",
    "label.page.title.main.technical-features": "Technical Features",
    "label.page.title.task.list": "Task List",
    "label.page.title.task.detail": "Task Details",
    "label.page.title.task.register": "Task Registration",
    "label.page.title.task.edit": "Task Editing",
    "label.page.title.task.remove": "Task Removal",
    "label.page.title.debug.redux": "Debug Redux",
    "label.page.title.debug.feature": "Debug Feature",
    "label.page.title.error.error": "Error",
    // page description
    "label.page.description.main.home": "Home",
    "label.page.description.main.technical-features":
      "About the technical features used in this site.",
    "label.page.description.task.list":
      "You can narrow down the tasks and browse the list of tasks.",
    "label.page.description.task.detail": "Detailed task information.",
    "label.page.description.task.register": "Register one task.",
    "label.page.description.task.edit": "Edit one task.",
    "label.page.description.debug.redux": "This is the debug page for Redux.",
    "label.page.description.debug.feature":
      "This is a debug page for functional testing.",
    "label.page.description.error.error": "Error",
    // meta title
    "label.meta.title.main.home": "Home | {siteName}",
    "label.meta.title.main.technical-features":
      "Technical Features | {siteName}",
    "label.meta.title.task.list": "Task List | {siteName}",
    "label.meta.title.task.detail": "Task Details | {siteName}",
    "label.meta.title.task.register": "Task Registration | {siteName}",
    "label.meta.title.task.edit": "Task Editing | {siteName}",
    "label.meta.title.debug.redux": "Debug Redux | {siteName}",
    "label.meta.title.debug.feature": "Debug Feature | {siteName}",
    "label.meta.title.error.error": "Error | {siteName}",
    // meta description
    "label.meta.description.main.home": "Home",
    "label.meta.description.main.technical-features":
      "About the technical features used in this site.",
    "label.meta.description.task.list":
      "You can narrow down the task and browse the list of tasks.",
    "label.meta.description.task.detail": "Detailed task information.",
    "label.meta.description.task.register": "Register one task.",
    "label.meta.description.task.edit": "Edit one task.",
    "label.meta.description.debug.redux": "This is the debug page for Redux.",
    "label.meta.description.debug.feature":
      "This is a debug page for functional testing.",
    "label.meta.description.error.error": "Error page.",
    //---------------------------------------------
    // Label: Login
    //---------------------------------------------
    "label.login.username": "Username",
    "label.login.password": "Password",
    //---------------------------------------------
    // Label: Task
    //---------------------------------------------
    "label.task.id": "Task Id",
    "label.task.title": "Task Title",
    "label.task.description": "Task Description",
    "label.task.status": "Task Status",
    "label.task.image": "Task Image",
    "label.task.search": "Search Tasks",
    "label.task.register": "Task Registration",
    "label.task.search.result": "{searchResultNumber} results.",
    "label.task.search.description":
      "You can do a partial match search for task titles.",
    "label.task.search.required": "Please enter a task title",
    "label.task.edit": "Task edit",
    "label.task.remove": "Task removal",
    "label.task.remove.confirm": "Remove the task ID=[{id}]. Are you sure?",
    "label.task.section.task-information": "Task Information",
    "label.task.section.basic-information": "Basic Information",
    "label.task.section.image": "Task Image",
    //---------------------------------------------
    // Validation Error
    //---------------------------------------------
    "validation.required": "{name} is required.",
    "validation.max": "Please enter a {name} of {number} characters or less.",
    "validation.numeric": "Please enter a numerical value for the {name}.",
    "validation.range": "Please enter a {name} between {min} and {max}.",
    "validation.boolean": "Please enter a {name} of true or false.",
    //---------------------------------------------
    // Error
    //---------------------------------------------
    "error.login.required": "Not logged in.",
    "error.login.failure": "Incorrect username or password.",
    "error.healthcheck": "API server is not running",
    "error.page.notfound": "Page not found.",
    "error.service-unavailable": "Service unavailable.",
    "error.internal-server-error": "Internal server error occured.",
    "error.unknown-error": "Unknown error occured.",
  },
} as const;

import { CircularProgress } from "@chakra-ui/react";
import { VFC } from "react";
import { Helmet } from "react-helmet-async";
import { TaskDetailEntrypoint, useTaskDetailEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const TaskDetailEntrypointContainer: VFC<Props> = () => {
  const {
    taskListPage,
    taskDetailPage,
    errorPage,
    getUri,
    getAbsoluteUrl,
    taskId,
    historyPush,
    isLoading,
    error,
    taskEntity,
    convertError,
    labels,
  } = useTaskDetailEntrypoint();

  if (convertError) {
    historyPush(getUri(errorPage.relativeUrl));
    return <></>;
  }

  const Contents = () => {
    if (error) {
      return <></>;
    } else if (isLoading || !taskEntity) {
      return <CircularProgress />;
    }
    return <TaskDetailEntrypoint taskEntity={taskEntity} labels={labels} />;
  };

  return (
    <SidenaviLayoutContainer
      breadcrumbs={[
        { label: taskListPage.pageTitle, href: taskListPage.relativeUrl },
        {
          label: taskDetailPage.pageTitle,
          href: getUri(taskDetailPage.relativeUrl, taskId),
        },
      ]}
      pageTitle={taskDetailPage.pageTitle}
      pageDescription={taskDetailPage.pageDescription}
    >
      <Helmet>
        <title>{taskDetailPage.metaTitle}</title>
        <meta name="description" content={taskDetailPage.metaDescription} />
        <link
          rel="canonical"
          href={getAbsoluteUrl(taskDetailPage.relativeUrl, [taskId])}
        />
      </Helmet>
      <Contents />
    </SidenaviLayoutContainer>
  );
};

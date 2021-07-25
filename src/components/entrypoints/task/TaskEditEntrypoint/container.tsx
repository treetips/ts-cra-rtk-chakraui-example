import { CircularProgress } from "@chakra-ui/react";
import { VFC } from "react";
import { Helmet } from "react-helmet-async";
import { TaskEditEntrypoint, useTaskEditEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const TaskEditEntrypointContainer: VFC<Props> = () => {
  const {
    taskListPage,
    taskDetailPage,
    taskEditPage,
    errorPage,
    getUri,
    getAbsoluteUrl,
    historyPush,
    isLoading,
    error,
    taskEntity,
    taskId,
    convertError,
  } = useTaskEditEntrypoint();

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
    return <TaskEditEntrypoint taskEntity={taskEntity} />;
  };

  return (
    <SidenaviLayoutContainer
      breadcrumbs={[
        {
          href: getUri(taskListPage.relativeUrl),
          label: getUri(taskListPage.pageTitle),
        },
        {
          href: getUri(taskDetailPage.relativeUrl, taskId),
          label: getUri(taskDetailPage.pageTitle),
        },
        {
          href: getUri(taskEditPage.relativeUrl, taskId),
          label: getUri(taskEditPage.pageTitle),
        },
      ]}
      pageTitle={taskEditPage.pageTitle}
      pageDescription={taskEditPage.pageDescription}
    >
      <Helmet>
        <title>{taskEditPage.metaTitle}</title>
        <meta name="description" content={taskEditPage.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(taskEditPage.relativeUrl)} />
      </Helmet>
      <Contents />
    </SidenaviLayoutContainer>
  );
};

import { CircularProgress } from "@chakra-ui/react";
import { VFC } from "react";
import { Helmet } from "react-helmet-async";
import { TaskListEntrypoint, useTaskListEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const TaskListEntrypointContainer: VFC<Props> = () => {
  const {
    theme,
    page,
    getUri,
    getAbsoluteUrl,
    keywordQueryString,
    isLoading,
    taskEntities,
    labels,
  } = useTaskListEntrypoint();

  return (
    <SidenaviLayoutContainer
      breadcrumbs={[
        { href: getUri(page.relativeUrl), label: getUri(page.pageTitle) },
      ]}
      pageTitle={page.pageTitle}
      pageDescription={page.pageDescription}
    >
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(page.relativeUrl)} />
      </Helmet>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <TaskListEntrypoint
          theme={theme}
          keywordQueryString={keywordQueryString}
          taskEntities={taskEntities}
          labels={labels}
        />
      )}
    </SidenaviLayoutContainer>
  );
};

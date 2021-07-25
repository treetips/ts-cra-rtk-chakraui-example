import { VFC } from "react";
import { Helmet } from "react-helmet-async";
import { TaskRegistrationEntrypoint, useTaskRegistrationEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const TaskRegistrationEntrypointContainer: VFC<Props> = () => {
  const { page, getUri, getAbsoluteUrl } = useTaskRegistrationEntrypoint();

  return (
    <SidenaviLayoutContainer
      breadcrumbs={[
        { label: getUri(page.pageTitle), href: getUri(page.relativeUrl) },
      ]}
      pageTitle={page.pageTitle}
      pageDescription={page.pageDescription}
    >
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(page.relativeUrl)} />
      </Helmet>
      <TaskRegistrationEntrypoint />
    </SidenaviLayoutContainer>
  );
};

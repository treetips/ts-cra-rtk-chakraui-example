import { memo, VFC } from "react";
import { Helmet } from "react-helmet-async";
import { useDebugFeatureEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../../projects/layout/SidenaviLayout";
import { DebugFeatureEntrypoint } from "./presenter";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const DebugFeatureEntrypointContainer: VFC<Props> = memo(() => {
  const { page, getAbsoluteUrl } = useDebugFeatureEntrypoint();

  return (
    <SidenaviLayoutContainer
      breadcrumbs={[{ href: page.relativeUrl, label: page.pageTitle }]}
      pageTitle={page.pageTitle}
      pageDescription={page.pageDescription}
    >
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(page.relativeUrl)} />
      </Helmet>
      <DebugFeatureEntrypoint />
    </SidenaviLayoutContainer>
  );
});

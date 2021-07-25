import { memo, VFC } from "react";
import { Helmet } from "react-helmet-async";
import { TechnicalFeaturesEntrypoint, useTechnicalFeaturesEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const TechnicalFeaturesEntrypointContainer: VFC<Props> = memo(() => {
  const { page, getAbsoluteUrl } = useTechnicalFeaturesEntrypoint();

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
      <TechnicalFeaturesEntrypoint />
    </SidenaviLayoutContainer>
  );
});

import { memo, VFC } from "react";
import { Helmet } from "react-helmet-async";
import { ErrorEntrypoint, useErrorEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const ErrorEntrypointContainer: VFC<Props> = memo(() => {
  const { page, getAbsoluteUrl, alertValue, labels } = useErrorEntrypoint();

  return (
    <SidenaviLayoutContainer isHidePageSection={true}>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(page.relativeUrl)} />
      </Helmet>
      <ErrorEntrypoint alertValue={alertValue} labels={labels} />
    </SidenaviLayoutContainer>
  );
});

import { memo, VFC } from "react";
import { Helmet } from "react-helmet-async";
import { HomeEntrypoint, useHomeEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const HomeEntrypointContainer: VFC<Props> = memo(() => {
  const { page, getAbsoluteUrl, isLoggedIn, labels } = useHomeEntrypoint();

  return (
    <SidenaviLayoutContainer isHidePageSection={true}>
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(page.relativeUrl)} />
      </Helmet>
      <HomeEntrypoint isLoggedIn={isLoggedIn} labels={labels} />
    </SidenaviLayoutContainer>
  );
});

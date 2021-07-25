import { memo, VFC } from "react";
import { Footer, useFooter } from ".";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const FooterContainer: VFC<Props> = memo(() => {
  const { thisYear } = useFooter();

  return <Footer copyrightYear={thisYear} />;
});

import { ComponentProps, memo, VFC } from "react";
import { AppBreadcrumb, useAppBreadcrumb } from ".";

type Props = Pick<ComponentProps<typeof AppBreadcrumb>, "links">;

/**
 * Container Component
 * @author treetips
 */
export const AppBreadcrumbContainer: VFC<Props> = memo(({ links }) => {
  const { pages } = useAppBreadcrumb();
  return <AppBreadcrumb pages={pages} links={links} />;
});

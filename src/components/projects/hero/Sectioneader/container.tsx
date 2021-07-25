import { ComponentProps, memo, VFC } from "react";
import { Sectioneader, useSectioneader } from ".";

type Props = Omit<ComponentProps<typeof Sectioneader>, "theme">;

/**
 * Container Component
 * @author treetips
 */
export const SectioneaderContainer: VFC<Props> = memo(({ title, actions }) => {
  const { theme } = useSectioneader();
  return <Sectioneader theme={theme} title={title} actions={actions} />;
});

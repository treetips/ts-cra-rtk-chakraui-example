import { ComponentProps, FC } from "react";
import { SidenaviMenuGroup, useSidenaviMenuGroup } from ".";

type Props = Omit<ComponentProps<typeof SidenaviMenuGroup>, "theme">;

/**
 * Container Component
 * @author treetips
 */
export const SidenaviMenuGroupContainer: FC<Props> = ({
  groupLabel,
  items,
  children,
}) => {
  const { theme } = useSidenaviMenuGroup();
  return (
    <SidenaviMenuGroup
      theme={theme}
      groupLabel={groupLabel}
      items={items}
      children={children}
    />
  );
};

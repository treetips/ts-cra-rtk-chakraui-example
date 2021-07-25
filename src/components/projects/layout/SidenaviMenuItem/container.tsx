import { VFC } from "react";
import { SidenaviMenuItem } from ".";
import { useAppTheme } from "../../../../hooks";
import { LinkProps } from "../../../../types/props/LinkProps";

type Props = LinkProps;

/**
 * Container Component
 * @author treetips
 */
export const SidenaviMenuItemContainer: VFC<Props> = ({
  icon,
  isExternal,
  url,
  label,
}) => {
  const { theme } = useAppTheme();

  return (
    <SidenaviMenuItem
      theme={theme}
      icon={icon}
      isExternal={isExternal}
      url={url}
      label={label}
    />
  );
};

import { Box } from "@chakra-ui/react";
import { ComponentProps, FC, memo } from "react";
import { AppThemeType } from "../../../../hooks";
import {
  SidenaviMenuItem,
  SidenaviMenuItemContainer,
} from "../SidenaviMenuItem";

type Props = {
  theme: AppThemeType;
  groupLabel: string;
  items?: ComponentProps<typeof SidenaviMenuItem>[];
};

/**
 * Presentational Component
 * @author treetips
 */
export const SidenaviMenuGroup: FC<Props> = memo(
  ({ theme, groupLabel, items, children }) => {
    return (
      <Box>
        <Box
          p={4}
          bgColor={theme.primary.bg}
          color={theme.primary.color}
          fontWeight="bold"
          shadow="dark-lg"
        >
          {groupLabel}
        </Box>
        {items?.map(({ icon, isExternal, url, label }, index: number) => (
          <SidenaviMenuItemContainer
            key={index}
            icon={icon}
            isExternal={isExternal}
            url={url}
            label={label}
          />
        ))}
        {children}
      </Box>
    );
  }
);

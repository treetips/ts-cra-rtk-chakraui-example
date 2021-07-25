import { Button } from "@chakra-ui/button";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { memo, VFC } from "react";
import { AppThemeType } from "../../../../hooks";
import { Language } from "../../../../types";

type Props = {
  theme: AppThemeType;
  currentLanguageName: string;
  onClick: (languageCode: string) => void;
};

/**
 * Presentational Component
 * @author treetips
 */
export const LanguageSelection: VFC<Props> = memo(
  ({ theme, currentLanguageName, onClick }) => {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          variant="solid"
          bg={theme.secondary.bg}
          color={theme.secondary.color}
          shadow="lg"
          _hover={{
            bg: theme.secondary.hover.bg,
            color: theme.secondary.hover.color,
            boxShadow: `0 0 10px yellow;`,
          }}
          _focus={{
            bg: theme.secondary.hover.bg,
            color: theme.secondary.hover.color,
            boxShadow: `0 0 10px yellow;`,
          }}
        >
          <Text>{currentLanguageName}</Text>
        </MenuButton>
        <MenuList bg={theme.secondary.bg} color={theme.secondary.color}>
          {Object.values(Language).map((value) => (
            <MenuItem
              key={value.languageCode}
              bg={theme.secondary.bg}
              color={theme.secondary.color}
              _hover={{
                bg: theme.secondary.hover.bg,
                color: theme.secondary.hover.color,
              }}
              _focus={{
                bg: theme.secondary.hover.bg,
                color: theme.secondary.hover.color,
              }}
              onClick={() => onClick(value.languageCode)}
            >
              <Text>
                {value.languageFlagEmoji}&nbsp;{value.languageName}
              </Text>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    );
  }
);

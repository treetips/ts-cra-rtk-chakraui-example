import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, Tooltip } from "@chakra-ui/react";
import { ChangeEvent, KeyboardEvent, memo, VFC } from "react";
import { MdClear } from "react-icons/md";
import { AppIconButtonContainer } from "../../../uiParts/button/AppIconButton";

type Props = {
  keyword?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClear: () => void;
  onSearch: (keyword?: string) => void;
  labels: {
    search: {
      placeholder: string;
      tooltip: string;
    };
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const TaskSearchForm: VFC<Props> = memo(
  ({ keyword, onChange, onEnter, onClear, onSearch, labels }) => {
    return (
      <Tooltip
        hasArrow
        label={labels.search.tooltip}
        colorScheme="primary"
        p={4}
        shadow="dark-lg"
      >
        <InputGroup borderWidth="1px" shadow="md">
          <AppIconButtonContainer
            aria-label="Clear Keyword"
            variant="outline"
            icon={<MdClear />}
            onClick={onClear}
          />
          <Input
            type="text"
            placeholder={labels.search.placeholder}
            value={keyword}
            onChange={onChange}
            onKeyPress={onEnter}
          />
          <AppIconButtonContainer
            aria-label="Search Task Title"
            icon={<SearchIcon />}
            onClick={() => onSearch(keyword)}
          />
        </InputGroup>
      </Tooltip>
    );
  }
);

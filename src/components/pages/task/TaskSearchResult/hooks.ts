import { useTranslate } from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useTaskSearchResult = ({
  searchResultNumber,
}: {
  searchResultNumber: number;
}) => {
  const { translate } = useTranslate();

  return {
    labels: {
      searchResult: translate("label.task.search.result", {
        searchResultNumber,
      }),
    },
  } as const;
};

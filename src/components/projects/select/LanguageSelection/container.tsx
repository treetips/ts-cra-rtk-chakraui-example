import { memo, VFC } from "react";
import { LanguageSelection, useLanguageSelection } from ".";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const LanguageSelectionContainer: VFC<Props> = memo(() => {
  const { theme, language, handleLanguage } = useLanguageSelection();

  return (
    <LanguageSelection
      theme={theme}
      currentLanguageName={language.languageName}
      onClick={handleLanguage}
    />
  );
});

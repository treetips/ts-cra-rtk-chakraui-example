import { ComponentProps, memo, VFC } from "react";
import { ArticleHeader } from ".";
import { useArticleHeader } from "./hooks";

type Props = Omit<ComponentProps<typeof ArticleHeader>, "theme">;

/**
 * Container Component
 * @author treetips
 */
export const ArticleHeaderContainer: VFC<Props> = memo(
  ({ pageTitle: title, pageDescription: description }) => {
    const { theme } = useArticleHeader();
    return (
      <ArticleHeader
        theme={theme}
        pageTitle={title}
        pageDescription={description}
      />
    );
  }
);

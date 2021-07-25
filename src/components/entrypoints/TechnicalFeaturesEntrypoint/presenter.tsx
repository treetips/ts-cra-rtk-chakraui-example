import { Box, Wrap } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { FeatureCardContainer } from "../../projects/card/FeatureCard";

type Props = {};

/**
 * Presentational Component
 * @author treetips
 */
export const TechnicalFeaturesEntrypoint: VFC<Props> = memo(() => {
  return (
    <Wrap justify="center" spacing={5}>
      <Box>
        <FeatureCardContainer
          image={{
            src: "/images/create-react-app-icon.svg",
            width: 140,
            height: 154,
          }}
          title="Create React App"
          url="https://ja.reactjs.org/docs/create-a-new-react-app.html"
          features={[
            {
              label: "create-react-app cli",
            },
          ]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/react-icon.png" }}
          title="React"
          url="https://ja.reactjs.org/"
          features={[
            {
              label: "Custom Hooks",
              url: "https://reactjs.org/docs/hooks-custom.html",
            },
            {
              label: "React.memo",
              url: "https://reactjs.org/docs/react-api.html#reactmemo",
            },
            {
              label: "React.VFC",
              url: "https://basarat.gitbook.io/typescript/tsx/react#void-function-components",
            },
          ]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/chakraui-icon.png" }}
          title="Chakra UI"
          url="https://chakra-ui.com/"
          features={[{ label: "UI Framework" }, { label: "Responsive" }]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/react-final-form-icon.png" }}
          title="REACT FINAL FORM"
          url="https://final-form.org/react"
          features={[{ label: "Form Validation" }]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{
            src: "/images/redux-icon.png",
            width: 110,
            height: 113,
          }}
          title="Redux Toolkit"
          url="https://redux-toolkit.js.org/"
          features={[
            {
              label: "createSlice",
              url: "https://redux-toolkit.js.org/api/createSlice",
            },
            {
              label: "createAsyncThunk",
              url: "https://redux-toolkit.js.org/api/createAsyncThunk",
            },
            {
              label: "createEntityAdapter",
              url: "https://redux-toolkit.js.org/api/createEntityAdapter",
            },
          ]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/react-helmet-async-icon.png" }}
          title="React Helmet Async"
          url="https://github.com/staylor/react-helmet-async"
          features={[{ label: "SEO" }]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/storybook-icon.png" }}
          title="Storybook"
          url="https://storybook.js.org/"
          features={[{ label: "UI Viewing" }, { label: "UI Testing" }]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/jest-icon.png" }}
          title="JEST"
          url="https://jestjs.io/ja/docs/getting-started"
          features={[{ label: "Unit Test" }]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/design-architecture-icon.png" }}
          title="Architecture"
          url="https://patternlab.io/"
          features={[
            { label: "Container Component" },
            { label: "Presentational Component" },
          ]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/typescript-icon.png" }}
          title="TypeScript"
          url="https://www.typescriptlang.org/"
          features={[
            {
              label: "Optional Chaining",
              url: "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html",
            },
          ]}
        />
      </Box>
      <Box>
        <FeatureCardContainer
          image={{ src: "/images/vscode-icon.png" }}
          title="VSCode"
          url="https://code.visualstudio.com/"
          features={[
            {
              label: "prettier",
              url: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
            },
            {
              label: "editorconfig",
              url: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
            },
          ]}
        />
      </Box>
    </Wrap>
  );
});

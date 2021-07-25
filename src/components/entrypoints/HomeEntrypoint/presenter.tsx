import { Box } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { useLocation } from "react-router";
import { LoginLocationState } from "../../../types/url/state/LoginLocationState";
import { LoggedInContentContainer } from "../../pages/home/LoggedInContent";
import { NotLoggedInContentContainer } from "../../pages/home/NotLoggedInContent";
import { LoginLogoutButtonContainer } from "../../projects/button/loginLogout/LoginLogoutButton";
import { SectioneaderContainer } from "../../projects/hero/Sectioneader";

type Props = {
  isLoggedIn: boolean;
  labels: {
    pageTitle: string;
  };
};

/**
 * Presentational Component
 * @author treetips
 */
export const HomeEntrypoint: VFC<Props> = memo(({ isLoggedIn, labels }) => {
  const { state } = useLocation<LoginLocationState>();
  const statusCode = state?.statusCode;

  return (
    <Box>
      <SectioneaderContainer
        title={labels.pageTitle}
        actions={<LoginLogoutButtonContainer />}
      />
      {isLoggedIn ? (
        <LoggedInContentContainer />
      ) : (
        <NotLoggedInContentContainer statusCode={statusCode} />
      )}
    </Box>
  );
});

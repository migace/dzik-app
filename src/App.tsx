import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { Box } from "@chakra-ui/react";

import { useLocalStorage } from "./hooks/useLocalStorage";
import { Navbar } from "./components/Navbar";
import { Bar } from "./components/Bar";
import { Report, Home } from "./views";
import { colors } from "./theme";
import { Onboarding } from "./views/Onboarding";
import { Alerts } from "./views/Alerts";
import { Settings } from "./views/Settings";
import { Wiki } from "./views/Wiki";

export const App = () => {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useLocalStorage(
    "onboarding",
    ""
  );
  const location = useLocation();

  return (
    <>
      {!isMobile && <Navbar />}
      <Box bg={isMobile ? colors.TURQUE : colors.WHITE} height="100%">
        <Switch>
          <Route path="/report">
            <Report />
          </Route>
          <Route path="/stats">
            <Home />
          </Route>
          <Route path="/alerts">
            <Alerts />
          </Route>
          <Route path="/wiki">
            <Wiki />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route
            path="/onboarding"
            render={() =>
              !!!isOnboardingCompleted && isMobile ? (
                <Onboarding onFinish={setIsOnboardingCompleted} />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            path="/"
            render={() =>
              !!isOnboardingCompleted || !isMobile ? (
                <Home />
              ) : (
                <Redirect to="/onboarding" />
              )
            }
          />
        </Switch>
      </Box>
      {isMobile && !!isOnboardingCompleted && (
        <Bar reportActive={location.pathname === "/report"} />
      )}
    </>
  );
};

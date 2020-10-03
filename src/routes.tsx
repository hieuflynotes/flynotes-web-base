import React, { useMemo } from "react";
import { Redirect, Route } from "react-router-dom";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory({});

// Auth route componnet
export function AuthRoute({ isAuthenticated, ...props }: iProtectRoute) {
  return useMemo(
    () => (
      <Route
        path={props.path}
        render={({ location }) =>
          isAuthenticated ? (
            <props.component />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    ),
    [isAuthenticated, props]
  );
}

// Guest route component
export function GuestRoute({ isAuthenticated, ...props }: iProtectRoute) {
  return useMemo(
    () => (
      <Route
        path={props.path}
        render={({ location }) =>
          !isAuthenticated ? (
            <props.component />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location },
              }}
            />
          )
        }
      />
    ),
    [isAuthenticated, props]
  );
}

export const goTo = (path: string) => {
  history.push(path);
};

interface iProtectRoute extends iRoute {
  isAuthenticated: boolean;
}

export interface iRoute {
  exact?: boolean;
  path: string;
  component: any;
  requireGuest?: boolean;
  requireAuth?: boolean;
}

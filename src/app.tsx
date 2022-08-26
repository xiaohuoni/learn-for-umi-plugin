import React from "react";
import { ErrorBoundary, ErrorBoundaryProps } from "@sentry/react";

export function rootContainer(container: JSX.Element) {
  const props = {
    showDialog: true,
    fallback: ({ error, componentStack, resetError }) =>
      (
        <React.Fragment>
          <div>You have encountered an error</div>
          <div>{error.toString()}</div>
          <div>{componentStack}</div>
          <button
            onClick={() => {
              resetError();
            }}
          >
            Click here to reset!
          </button>
        </React.Fragment>
      ) as React.ReactNode,
  } as ErrorBoundaryProps;
  return React.createElement(ErrorBoundary, props, container);
}

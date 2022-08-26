import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://96620dadccb040a3a5acc998a6078212@o1378593.ingest.sentry.io/6690607",
  integrations: [new BrowserTracing()],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
});

Sentry.setUser({
  id: "xiaohuoni",
  username: "聪小陈",
})
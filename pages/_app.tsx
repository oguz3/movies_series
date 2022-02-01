import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ReactQueryDevtools />
      <script
        type="text/javascript"
        src="https://staging.popupsmart.com/api/Bundle/85"
        async
      ></script>
    </QueryClientProvider>
  );
}

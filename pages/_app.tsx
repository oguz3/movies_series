import React from "react";
import Head from "next/head";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <Script
          strategy="afterInteractive"
          id="sleeknoteScript"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var sleeknoteScriptTag = document.createElement("script");
                sleeknoteScriptTag.type = "text/javascript";
                sleeknoteScriptTag.charset = "utf-8";
                sleeknoteScriptTag.src = ("//sleeknotecustomerscripts.sleeknote.com/55386.js");
                var s = document.getElementById("sleeknoteScript"); 
                s.parentNode.insertBefore(sleeknoteScriptTag, s); 
              })();
            `,
          }}
        />
      </Head>
      <Component {...pageProps} />
      <ReactQueryDevtools />
      <script
        type="text/javascript"
        src="https://staging.popupsmart.com/api/Bundle/85"
        async
      ></script>
      <script
        type="text/javascript"
        async
        src="//l.getsitecontrol.com/8wl56gr4.js"
      ></script>
    </QueryClientProvider>
  );
}

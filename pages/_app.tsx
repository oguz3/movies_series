import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "@styles/globals.scss";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <ul>
        <li>
          <Link href="/popupsmart">popupsmart</Link>
        </li>
        <li>
          <Link href="/getsitecontrol">getsitecontrol</Link>
        </li>
        <li>
          <Link href="/optimonk">optimonk</Link>
        </li>
        <li>
          <Link href="/sleeknote">sleeknote</Link>
        </li>
      </ul>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

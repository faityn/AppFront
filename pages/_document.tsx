import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
            href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
            rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

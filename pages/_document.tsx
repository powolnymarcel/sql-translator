import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Translate human language to SQL queries in seconds."
          />
          <meta property="og:site_name" content="SQL Translator" />
          <meta
            property="og:description"
            content="Translate human language to SQL queries in seconds."
          />
          <meta property="og:title" content="SQL Translator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SQL Translator" />
          <meta
            name="twitter:description"
            content="Translate human language to SQL queries in seconds."
          />
        </Head>
        <body className="bg-gray-100 text-gray-800 font-sans">
          <div className="max-w-4xl mx-auto p-4">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

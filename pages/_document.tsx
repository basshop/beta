import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="th">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Betashif</title>
        <link
          rel="icon"
          type="image/png"
          href="/image-removebg-preview (4).png"
        />
        <meta
          name="description"
          content="Betashif รับทำเว็บไซต์ และปล่อยเช่าเว็บสำเร็จรูปพร้อมใช้งานสุดคุ้ม | สร้างเว็บง่าย ครบจบในที่เดียวและ SEO มีคุณสภาพ"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=IBM+Plex+Sans+Thai:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

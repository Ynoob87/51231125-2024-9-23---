import "./globals.css";

export const metadata = {
  title: "範例網站",
  description: "2024/9/23 網頁設計 作業",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

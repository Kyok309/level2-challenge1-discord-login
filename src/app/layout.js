import "./globals.css";

export const metadata = {
  title: "Discord",
  description: "Discord Log in",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-ggSans">{children}</body>
    </html>
  );
}

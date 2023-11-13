import "./globals.css";

export const metadata = {
  title: "One Piece Wanted Poster Generator",
  description:
    "Step into the adventurous world of One Piece and become a notorious pirate with my personalized Wanted Poster Generator!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

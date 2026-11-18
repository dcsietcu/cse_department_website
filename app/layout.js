import './globals.css';

export const viewport = { themeColor: '#F6F5F1' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&amp;family=Instrument+Sans:wght@400;500;600&amp;family=Inter:wght@400;500&amp;display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

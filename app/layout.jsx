import './globals.css';

export const metadata = {
  title: 'Enfycon | Enterprise AI & Digital Transformation',
  description: 'Empowering enterprises through AI-driven digital transformation worldwide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-gray-900 antialiased selection:bg-[#3b5bdb] selection:text-white">
        {children}
      </body>
    </html>
  );
}

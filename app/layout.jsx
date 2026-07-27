import './globals.css';

export const metadata = {
  title: 'Enfycon | Futuristic AI & Digital Transformation',
  description: 'Empowering enterprises through AI-driven digital transformation worldwide.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#030614] text-gray-200 antialiased selection:bg-[#3b5bdb] selection:text-white">
        <div className="absolute inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#111836] via-[#030614] to-[#030614]"></div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next"; 
import "./globals.css";
import { ErrorBoundary } from 'react-error-boundary'; 

export const metadata: Metadata = {
  title: "Registration",
  description: "Sharecare Registration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
          {children}
        </ErrorBoundary>
        </body>
    </html>
  );
}

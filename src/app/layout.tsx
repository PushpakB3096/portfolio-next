import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/globals.css';

export const metadata = {
  title: 'Your Portfolio',
  description: 'Personal portfolio showcasing my work and skills',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-poppins">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
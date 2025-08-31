import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "motionGo | vrum...vrum...",
  description: "u deserve better, Bcz your time matters",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-white.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-gradient-to-r from-blue-100 to-blue-50 py-12 border-t mt-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-extrabold text-blue-700 tracking-wide">motionGo</span>
                <span className="text-sm text-gray-500">You deserve better, because your time matters.</span>
                <span className="text-xs text-gray-400 mt-2">Empowering your car search with speed, trust, and transparency.</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-gray-700 mb-2">Quick Links</span>
                <nav className="flex flex-col gap-1 text-gray-600 text-sm">
                  <a href="/" className="hover:text-blue-600">Home</a>
                  <a href="/cars" className="hover:text-blue-600">Browse Cars</a>
                  <a href="/waitlist" className="hover:text-blue-600">Waitlist</a>
                  <a href="/sign-in" className="hover:text-blue-600">Login</a>
                  <a href="/sign-up" className="hover:text-blue-600">Sign Up</a>
                </nav>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-gray-700 mb-2">Contact & Social</span>
                <a href="mailto:contact@motiongo.com" className="text-gray-600 hover:text-blue-600 text-sm">contact@motiongo.com</a>
                <a href="tel:+1234567890" className="text-gray-600 hover:text-blue-600 text-sm">+1 234 567 890</a>
                <div className="flex gap-3 mt-2">
                  <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="hover:text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37c-.83.5-1.75.87-2.72 1.07A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.1.99C7.69 9.13 4.07 7.15 1.64 4.15c-.37.64-.58 1.38-.58 2.17 0 1.5.76 2.83 1.92 3.61-.71-.02-1.38-.22-1.97-.54v.05c0 2.1 1.5 3.85 3.5 4.25-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.7 2.1 2.94 3.95 2.97A8.6 8.6 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.13 12.13 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 24 4.59a8.36 8.36 0 0 1-2.54.7z"/></svg>
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" className="hover:text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.396 3.678 1.377c-.98.98-1.246 2.092-1.305 3.373C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.325 2.393 1.305 3.373.981.981 2.093 1.246 3.374 1.305C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.324 3.374-1.305.98-.98 1.246-2.092 1.305-3.373.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.325-2.393-1.305-3.373-.981-.981-2.093-1.246-3.374-1.305C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full text-center text-xs text-gray-400 mt-8 border-t pt-4">
              &copy; 2025 motionGo. All rights reserved.
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}

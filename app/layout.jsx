import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// COMPONENTES
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Ivan Izidoro",
  description: "Ivan um exelente profissional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${jetbrains_Mono.variable} antialiased`}>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}

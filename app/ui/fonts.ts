import { Inter, Lusitana, Heebo } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const heebo = Heebo({
  subsets: ["latin"],
  variable: "--font-heebo",
});

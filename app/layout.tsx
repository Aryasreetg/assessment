import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster"
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
const poppins = Poppins({
	style: ["italic", "normal"],
	subsets: ["latin"],
	variable: "--font-sans",
	weight: ["100", "300", "400", "500", "700", "900"],
});
export const metadata: Metadata = {
	title: "Assessment app",
	description: "Generated by create next app",
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Navbar />
				{children}
				<Toaster />
			</body>
		</html>
	);
}

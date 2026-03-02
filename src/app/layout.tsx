import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Thanh Thuong | Web & Mobile Developer",
    description: "Portfolio of Thanh Thuong - Web & Mobile Developer specializing in React Native, Expo, and iOS development. Creator of My Adventures App on the App Store.",
    keywords: ["Web Developer", "Mobile Developer", "React Native", "iOS Developer", "Expo", "TypeScript", "Thanh Thuong", "My Adventures App"],
    authors: [{ name: "Thanh Thuong" }],
    openGraph: {
        title: "Thanh Thuong | Web & Mobile Developer",
        description: "Portfolio of Thanh Thuong - Web & Mobile Developer",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}

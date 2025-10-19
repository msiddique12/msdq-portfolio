import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Muhammad Siddique",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

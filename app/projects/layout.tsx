import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Muhammad Siddique",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

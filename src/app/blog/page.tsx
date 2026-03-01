import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "Blog | Insights & Perspectives on Luxury Real Estate | RedStar Huts",
  description:
    "Expert analysis, market intelligence, and thoughtful perspectives on luxury real estate in Mohali, Zirakpur, and Chandigarh from the RedStar Huts advisory team.",
  alternates: {
    canonical: "https://www.redstarhuts.com/blog",
  },
  openGraph: {
    title: "Blog | Insights & Perspectives | RedStar Huts",
    description:
      "Expert analysis and market intelligence on luxury real estate in Punjab's Tricity region.",
    url: "https://www.redstarhuts.com/blog",
    type: "website",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}

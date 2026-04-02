import type { Metadata } from "next";
import Header from "@/app/components/AboutUs/Header";
import Fill from "@/app/components/AboutUs/Fill";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <Fill />
    </>
  );
}

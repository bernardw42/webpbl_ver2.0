import type { Metadata } from "next";
import Header from "@/app/components/Services/Header"

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
    return(
    <>
      <Header></Header>
    </>
    )
}

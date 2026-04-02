import type { Metadata } from "next";
import Header from "@/app/components/Home/Header";
import Service from "@/app/components/Home/Service";
import Map from "@/app/components/Home/Map";
import Message from "@/app/components/Home/Message";
import Credits from "@/app/components/Home/Credits";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <>
      <Header/>
      <Service/>
      <Map/>
      <Message/>
      <Credits/>
    </>
  );
}

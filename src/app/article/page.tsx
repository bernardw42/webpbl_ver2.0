import type { Metadata } from "next";
import Header from "@/app/components/Article/Header";
import Art from "@/app/components/Article/Art"

export const metadata: Metadata = {
  title: "Article",
};

export default function Article(){
    return(
        <>
        <Header></Header>
        <Art></Art>
        </>
    )
}

import type { Metadata } from "next";
import Message from "../../components/Article/Text/PembelianJasa/Header"
import Content from "../../components/Article/Text/PembelianJasa/Content"

export const metadata: Metadata = {
  title: "Artikel - Pembelian Jasa",
};

export default function pembelianjasa() {
    return(
        <>
        <Message></Message>
        <Content></Content>
        </>
    )
}

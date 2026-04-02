import type { Metadata } from "next";
import Message from "../components/ContactUs/Message"

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUs (){
    return(
        <>
        <Message></Message>
        </>
    )
}

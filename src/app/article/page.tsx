"use client"

import Header from "@/app/components/Article/Header";
import Art from "@/app/components/Article/Art"
import { useEffect } from "react";

export default function Article(){
    return(
        <>
        <head>
            <title>PBL - Article</title>
        </head>
        <Header></Header>
        <Art></Art>
        </>
    )
}
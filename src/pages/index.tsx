'use client';
import React from "react";
import { useState } from "react"
import HomePage from "./api/Homepage/Main";
import Header from "../components/Header";


export default function Home() {
    const [isDesktop, setIsDesktop] = useState<boolean>(true);
  return (
    <>
   <Header/>
   <HomePage/>
    </>
   
  );
}

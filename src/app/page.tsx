"use client";
import Image from "next/image";
import { getCanvas } from "./action";
import { useEffect, useState } from "react";

export default function Home() {
 const [imgSrc, setImageSrc] = useState<string>();

 useEffect(() => {
  (async () => {
   try {
    const data = await getCanvas();
    setImageSrc(data);
   } catch (e) {
    console.error(e);
   }
  })();
 }, []);
 return imgSrc && <Image src={imgSrc} width={800} height={400} alt="" />;
}

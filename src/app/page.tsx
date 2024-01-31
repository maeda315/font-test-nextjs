import Image from "next/image";
import { getCanvas } from "./action";

export default async function Home() {
 const imgSrc = await getCanvas();
 return imgSrc && <Image src={imgSrc} width={800} height={400} alt="" />;
}

import { createCanvas, registerFont } from "canvas";
import path from "path";

// error on vercel
const fontPath = path.resolve(
 process.cwd(),
 "assets/NotoSansJP-VariableFont_wght.ttf"
);

registerFont(fontPath, {
 family: "NotoSansJP",
});

export async function getCanvas() {
 const canvas = createCanvas(800, 400);
 const context = canvas.getContext("2d");

 context.font = "30px 'Arial'";
 context.fillText("Hello こんにちは", 50, 100);

 context.font = "30px 'NotoSansJP'";
 context.fillText("Hello こんにちは", 50, 200);

 const imageBuffer = canvas.toDataURL("image/png");

 return imageBuffer;
}

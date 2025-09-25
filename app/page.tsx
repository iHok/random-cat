//import { connection } from "next/server"; // 追加
import { CatImage } from "./cat-image"; // 追加
import { fetchImage } from "./fetch-image"; // 追加
 
export default async function Home(): Promise<Image> {
//  await connection();
  const image = await fetchImage();
  console.log("Home: 画像情報を取得しました", image);
  return <CatImage url={image.url} />;
}
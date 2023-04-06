import Link from "next/link";
import { getProducts } from "../service/products";
import MeoArticle from "../components/MeoArticle";
import Clothes from "../../public/clothes.jpg";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지!</h1>
      <Image src={Clothes} alt="clothes" width={400} height={400} />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeoArticle />
    </>
  );
}

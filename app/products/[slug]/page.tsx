import { getProduct, getProducts } from "@/app/service/products";
import { notFound } from "next/navigation";

import JeansImg from "../../../public/jeans.jpg";
import ShoesImg from "../../../public/shoes.jpg";
import TshirtImg from "../../../public/tshirt.jpg";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};

const iamgeData = {
  jeans: JeansImg,
  shoes: ShoesImg,
  tshirt: TshirtImg,
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품 이름: ${params.slug}`,
    description: `${params.slug} 제품 설명 페이지 입니다.`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  const getImageSrc = (id: string) => {
    switch (id) {
      case "1234":
        return JeansImg;
      case "1235":
        return ShoesImg;
      case "1236":
        return TshirtImg;
      default:
        return JeansImg;
    }
  };

  const imageSrc = getImageSrc(product?.id ?? "jeans");

  if (!product) {
    notFound();
  }

  return (
    <>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image src={imageSrc} width={400} height={400} alt="product image" />
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}

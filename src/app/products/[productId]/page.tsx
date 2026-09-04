import Link from "next/link";

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetail({ params }: Props) {
  return (
    <div>
      <h1>Product {params.productId}</h1>
      <Link href="/products">Kembali ke Daftar Produk</Link>
    </div>
  );
}
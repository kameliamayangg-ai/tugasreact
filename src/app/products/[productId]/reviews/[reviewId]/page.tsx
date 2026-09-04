import Link from "next/link";

type Props = {
  params: {
    productId: string;
    reviewId: string;
  };
};

export default function ReviewDetail({ params }: Props) {
  return (
    <div>
      <h1>Review {params.reviewId} for product {params.productId}</h1>
      <Link href={`/products/${params.productId}`}>Kembali ke Detail Produk</Link>
    </div>
  );
}
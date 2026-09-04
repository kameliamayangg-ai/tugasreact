//src/app/blogs/[blogId]/page.tsx
import Link from "next/link";

type Props = {
  params: {
    blogId: string;
  };
};

export default function BlogDetail({ params }: Props) {
  return (
    <div>
      <h1>Blog {params.blogId}</h1>
      <Link href="/blogs">Kembali ke Daftar Blog</Link>
    </div>
  );
}
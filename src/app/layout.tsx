import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <nav>
          <Link href="/">Home</Link> | 
          <Link href="/about">About</Link> | 
          <Link href="/profile">Profile</Link> | 
          <Link href="/blogs">Blogs</Link> | 
          <Link href="/products">Products</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
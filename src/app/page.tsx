// src/app/page.tsx
import React from 'react';

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Selamat Datang di Halaman Utama</h1>
      <nav>
        <ul>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/products">Products</Link></li>
        </ul>
      </nav>
    </div>
  );
}
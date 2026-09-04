//src/page.tsx
import Link from "next/link";
export default function Profile() {
  return (
    <div>
        <h1>Welcome to Profile</h1>
      <h2>Profil Saya</h2>
      <p>Nama: Kamelia Mayang Sari</p>
      <p>Kelas: XI RPL B</p>
      <p>Sekolah: SMKN 4 Malang</p>
    <Link href="/">Kembali ke Home</Link>
    </div>
  );
}
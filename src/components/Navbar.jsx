import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between bg-main text-white px-6 py-4">
      <h1 className="text-2xl font-semibold">Fintory</h1>

      <nav>
        <Link to="/" className="px-5">
          Beranda
        </Link>
        <Link to="/dashboard" className="px-5">
          Laporan
        </Link>
        <Link to="/about" className="px-5">
          Tentang kami
        </Link>
      </nav>
    </header>
  );
}

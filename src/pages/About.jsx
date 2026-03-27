import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="p-8 space-y-6">
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-center">Tentang Kami</h1>
        </div>

        {/* CONTENT */}
        <div className="bg-white border border-gray-300 p-4 rounded-xl hover:shadow-md hover:-translate-y-1 transition">
          <AboutCard />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

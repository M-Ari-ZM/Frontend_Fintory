import Navbar from "../components/Navbar";
import AboutCard from "../components/AboutCard";
import TeamCards from "../components/TeamCards";
import Footer from "../components/Footer";

export default function Dashboard() {
  return (
    <div className="bg-gray-50">
      <Navbar />

      <div className="p-8 py-20 space-y-20">
        <div className="space-y-6">
          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold text-center">Tentang Kami</h1>
          </div>

          {/* CONTENT */}
          <AboutCard />
        </div>

        <div className="space-y-6">
          {/* HEADER */}
          <div>
            <h1 className="text-3xl font-bold text-center">Tim Capstone</h1>
          </div>

          {/* CONTENT */}
          <TeamCards />
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

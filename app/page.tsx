import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import Profile from "@/components/Profile";
import Expertise from "@/components/Expertise";
import AuditPortfolio from "@/components/AuditPortfolio";
import Verticals from "@/components/Verticals";
import Clients from "@/components/Clients";
import Advisory from "@/components/Advisory";
import Standing from "@/components/Standing";
import Closer from "@/components/Closer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <StatsStrip />
      <Profile />
      <Expertise />
      <AuditPortfolio />
      <Verticals />
      <Clients />
      <Advisory />
      <Standing />
      <Closer />
      <Footer />
    </main>
  );
}

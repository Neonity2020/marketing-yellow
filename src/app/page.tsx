import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Banner from "@/components/Banner/Banner";
import Banner2 from "@/components/Banner/Banner2";
import Cards from "@/components/Cards/Cards";
import Email from "@/components/Email/Email";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Hero />
        <Services />
        <Banner />
        <Cards />
        <Banner2 />
        <Email />
      </main>
    </div>
  );
}

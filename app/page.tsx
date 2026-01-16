import Hero from "@/components/Hero";
import Nav from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-white min-h-screen p-4">
      <main>
  <Nav/>
  <Hero/>
      </main>
    </div>
  );
}

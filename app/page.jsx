// app/page.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TheKeep from "../components/TheKeep";


export default function Page() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TheKeep />
    </main>
  );
}

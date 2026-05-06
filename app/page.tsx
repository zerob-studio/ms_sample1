import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Clients from '@/components/Clients';
import Studios from '@/components/Studios';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Portfolio />
      <Clients />
      <Studios />
      <Contact />
      <Footer />
    </main>
  );
}

import NavBar from "@/components/NavBar"
import Footer from "@/pages/Footer";
import Gallery from "@/pages/Gallery";
import Hero from "@/pages/Hero";
import Objective from "@/pages/Objective";
import Performance from "@/pages/Performance";
import Services from "@/pages/Services";
import Team from "@/pages/Team";
import Testimonials from "@/pages/Testimonials";
import WhyUs from "@/pages/WhyUs";
import { testimonials } from "@/sanity/constants"

const page = async () => {
  return (
    <div className="overflow-x-clip">
      {/* Navbar */}
      <NavBar />

      {/* Hero */}
      <section id="home" className="relative">
        <div className="absolute blur-[600px] bg-[#54BE96]/30 p-96 -z-10 -right-72 -top-56" />
        <Hero />
      </section>

      {/* Objective */}
      <section id="objective">
        <Objective />
      </section>

      {/* Services */}
      <section id="services">
        <Services />
      </section>

      {/* Testimonials */}
      <section id="testimonials">
        <Testimonials testimonials={testimonials} />
      </section>

      {/* Performance */}
      <section id="performance">
        <Performance />
      </section>

      {/* Why Us */}
      <section id="whyus" className="relative">
        <div className="absolute blur-[1000px] bg-[#54BE96]/40 p-96 -z-10 -left-72 -top-56" />
        <WhyUs />
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Team */}
      <section id="team" className="relative">
        <div className="absolute blur-[400px] bg-[#54BE96]/30 p-96 -z-10 -right-44 -bottom-56" />
        <Team />
      </section>

      {/* Footer */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  )
}

export default page
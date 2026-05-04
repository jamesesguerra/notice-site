import Navbar from "@/components/ui/navbar"
import Hero from "@/components/layout/hero"
import Work from "@/components/layout/work"
import Philosophy from "@/components/layout/philosophy"
import Services from "@/components/layout/services"
import Footer from "@/components/layout/footer"

const navigationData = [
  {
    title: "The Studio",
    href: "#",
  },
  {
    title: "The Work",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Get Started",
    href: "#",
  },
]

const NavbarPage = () => {
  return (
    <div>
      <Navbar navigationData={navigationData} />
      <Hero />
      <Work />
      <Philosophy />
      <Services />
      <Footer />
    </div>
  )
}

export default NavbarPage

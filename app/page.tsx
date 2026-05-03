import Navbar from "@/components/ui/navbar"
import Hero from "@/components/layout/hero"
import Work from "@/components/layout/work"
import Philosophy from "@/components/layout/philosophy"
import Services from "@/components/layout/services"
import Footer from "@/components/layout/footer"

const navigationData = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contacts",
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

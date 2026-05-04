import { MenuIcon, SearchIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Image from "next/image"

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 pt-6 pb-4 sm:px-6">
        <a href="#">
          <Image
            src="/images/logo.png"
            alt="notice co. logo"
            width={120}
            height={40}
            className="h-auto w-24 sm:w-28 md:w-32 lg:w-[120px]"
          />
        </a>

        <div className="flex items-center gap-6">
          <div className="flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16">
            <a href="#" className="hover:text-primary max-md:hidden">
              The Studio
            </a>
            <a href="#" className="hover:text-primary max-md:hidden">
              The Work
            </a>
            <a href="#" className="hover:text-primary max-md:hidden">
              Services
            </a>
            <a href="#" className="hover:text-primary max-md:hidden">
              Get Started
            </a>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <MenuIcon />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar

import { Button } from "../ui/button"
import Image from "next/image"
import MobileFooter from "./mobileFooter"
import Link from "next/link"

const Footer = () => {
  return (
    <>
      <div className="hidden bg-black md:block">
        <div className="mx-auto max-w-7xl px-4 py-15">
          <div className="flex justify-between">
            <div>
              <p className="mb-5 font-museo leading-15 font-semibold text-customCream md:text-4xl lg:text-5xl">
                You don't need a perfect brief. <br /> Just a curiosity to
                explore. <br /> We'll help connect the dots.
              </p>
              <Button variant="default">Book a discovery call</Button>
            </div>

            <div className="self-end">
              <Image
                src="/images/footer_logo.png"
                width={230}
                height={230}
                alt="Notice Company logo"
                className="h-auto w-24 sm:w-28 md:w-32 lg:w-[230px]"
              />
            </div>
          </div>

          <div className="mt-20 mb-8 flex justify-center gap-3">
            <Link href="https://www.linkedin.com/">
              <Image
                src="/images/socials-57.png"
                width={30}
                height={30}
                alt="LinkedIn link"
              />
            </Link>

            <Link href="https://www.instagram.com/">
              <Image
                src="/images/socials-58.png"
                width={30}
                height={30}
                alt="Instagram link"
              />
            </Link>

            <Link href="mailto:noticeco@gmail.com">
              <Image
                src="/images/socials-59.png"
                width={30}
                height={30}
                alt="Email link"
              />
            </Link>

            <Link href="https://www.facebook.com/">
              <Image
                src="/images/socials-60.png"
                width={30}
                height={30}
                alt="Facebook link"
              />
            </Link>
          </div>

          <div className="flex justify-center">
            <p className="text-xs text-white">
              Copyright © Notice Company,2026
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <MobileFooter />
      </div>
    </>
  )
}

export default Footer

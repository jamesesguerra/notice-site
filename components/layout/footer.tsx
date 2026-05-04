import { Button } from "../ui/button"
import Image from "next/image"

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 py-15 sm:px-6">
        <div className="flex justify-between">
          <div>
            <p className="mb-5 font-museo text-5xl leading-15 font-semibold text-customCream">
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
            />
          </div>
        </div>

        <div className="mt-20 mb-8 flex justify-center gap-3">
          <Image
            src="/images/socials-57.png"
            width={30}
            height={30}
            alt="LinkedIn link"
          />
          <Image
            src="/images/socials-58.png"
            width={30}
            height={30}
            alt="Instagram link"
          />
          <Image
            src="/images/socials-59.png"
            width={30}
            height={30}
            alt="Email link"
          />
          <Image
            src="/images/socials-60.png"
            width={30}
            height={30}
            alt="Facebook link"
          />
        </div>

        <div className="flex justify-center">
          <p className="text-xs text-white">Copyright © Notice Company,2026</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

import Image from "next/image"
import { Button } from "../ui/button"

const MobileFooter = () => {
  return (
    <div className="bg-black px-8">
      <Image
        src="/images/footer_logo.png"
        width={150}
        height={150}
        alt="Notice Company logo"
        className="pt-20"
      />
      <p className="py-10 font-museo text-5xl font-semibold text-customCream">
        Start a project today and speak with our brand experts.
      </p>

      <div className="flex justify-center">
        <Button variant="default" size="full">
          <span className="py-6 text-xl">Tell us about your brand</span>
        </Button>
      </div>

      <div className="mt-15 flex justify-center gap-7">
        <Image
          src="/images/socials-57.png"
          width={60}
          height={60}
          alt="LinkedIn link"
          priority
        />
        <Image
          src="/images/socials-58.png"
          width={60}
          height={60}
          alt="Instagram link"
          priority
        />
        <Image
          src="/images/socials-59.png"
          width={60}
          height={60}
          alt="Email link"
          priority
        />
        <Image
          src="/images/socials-60.png"
          width={60}
          height={60}
          alt="Facebook link"
          priority
        />
      </div>

      <div className="flex justify-center py-5">
        <p className="text-xs text-white">Copyright © Notice Company,2026</p>
      </div>
    </div>
  )
}

export default MobileFooter

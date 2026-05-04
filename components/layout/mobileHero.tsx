import Image from "next/image"
import { Button } from "../ui/button"

const MobileHero = () => {
  return (
    <div className="py-5 md:hidden">
      <div className="flex flex-col items-center font-museo text-7xl font-medium text-customCream">
        <div>
          <div className="flex items-baseline gap-2">
            <h3>Great</h3>
            <div className="flex">
              <Image
                src="/images/benner_icons-51.png"
                width={50}
                height={50}
                alt="a green exclamation point"
                priority
              />
              <Image
                src="/images/benner_icons-52.png"
                width={50}
                height={50}
                alt="a blue circle"
                priority
              />
            </div>
          </div>

          <div className="flex items-baseline gap-2">
            <h3>design</h3>
            <Image
              src="/images/banner_design_icons-49.png"
              width={50}
              height={50}
              alt="a green exclamation point"
              priority
            />
          </div>

          <div className="flex items-center gap-2">
            <h3>ahead</h3>
            <Image
              src="/images/banner_design_icons-50.png"
              width={90}
              height={90}
              alt="a green exclamation point"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="max-w-2/3 pt-10 text-center text-xl font-medium">
          We craft identities, packaging, and digital worlds that stop scrolls,
          turn heads, and linger long after.
        </p>
        <Button variant="secondary" size="xl">
          <span className="text-xl">Book a discovery call</span>
        </Button>
      </div>
    </div>
  )
}

export default MobileHero

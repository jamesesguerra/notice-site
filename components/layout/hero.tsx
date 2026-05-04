import Image from "next/image"

import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6">
      <div className="mb-15 flex">
        <div className="w-[70%]">
          <h3 className="flex items-baseline gap-3 font-museo text-7xl font-medium text-orange">
            Remarkable
            <div className="flex">
              <Image
                src="/images/benner_icons-51.png"
                width={50}
                height={20}
                alt="a green exclamation point"
                priority
              />
              <Image
                src="/images/benner_icons-52.png"
                width={50}
                height={20}
                alt="a blue circle"
                priority
              />
            </div>
          </h3>

          <h3 className="flex items-baseline gap-3 font-museo text-7xl font-medium text-orange">
            <Image
              src="/images/banner_design_icons-49.png"
              width={50}
              height={20}
              alt="a yellow circle"
              priority
            />
            design ahead
            <Image
              src="/images/banner_design_icons-50.png"
              width={95}
              height={20}
              alt="pink arrows"
              priority
            />
          </h3>
        </div>

        <div className="w-[30%]">
          <p className="mb-3 text-lg leading-7 tracking-wide">
            We craft identities, packaging, and <br /> digital worlds that stop
            scrolls, turn <br /> heads, and linger long after.
          </p>
          <Button variant="default">Let's make noise!</Button>
        </div>
      </div>

      <Image
        src="/images/sunpop.png"
        width={1597}
        height={598}
        className="h-auto w-full"
        alt="an image of sodas"
        priority
      />
    </div>
  )
}

export default Hero

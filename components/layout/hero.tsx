import Image from "next/image"

import { Button } from "../ui/button"
import MobileHero from "./mobileHero"

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl bg-orange px-4 py-7 sm:px-6 md:bg-transparent">
      <div className="hidden md:block">
        <div className="mb-15 flex">
          <div className="w-[70%] font-museo text-5xl font-medium text-orange md:text-6xl lg:text-7xl">
            <h3 className="flex items-baseline gap-2">
              Remarkable
              <div className="flex">
                <Image
                  src="/images/benner_icons-51.png"
                  width={50}
                  height={20}
                  alt="a green exclamation point"
                  priority
                  className="h-auto w-8 md:w-12 lg:w-16"
                />
                <Image
                  src="/images/benner_icons-52.png"
                  width={50}
                  height={20}
                  alt="a blue circle"
                  priority
                  className="h-auto w-8 md:w-12 lg:w-16"
                />
              </div>
            </h3>

            <h3 className="flex items-baseline gap-2">
              <Image
                src="/images/banner_design_icons-49.png"
                width={50}
                height={20}
                alt="a yellow circle"
                className="h-auto w-8 md:w-12 lg:w-16"
                priority
              />
              design ahead
              <Image
                src="/images/banner_design_icons-50.png"
                width={95}
                height={20}
                alt="pink arrows"
                className="h-auto w-8 md:w-20 lg:w-23"
                priority
              />
            </h3>
          </div>

          <div className="w-[30%]">
            <p className="md:text-md mb-3 leading-7 tracking-wide lg:text-lg">
              We craft identities, packaging, and digital worlds that stop
              scrolls, turn heads, and linger long after.
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

      <MobileHero />
    </div>
  )
}

export default Hero

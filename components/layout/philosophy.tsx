import { Separator } from "../ui/separator"

const Philosophy = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:pt-20">
      <div className="flex justify-center">
        <h2 className="hidden font-museo text-6xl font-bold text-customGreen md:block md:text-7xl lg:text-9xl">
          Design Philosophy
        </h2>
        <h2 className="font-museo text-5xl font-bold text-customGreen md:hidden md:text-7xl lg:text-9xl">
          What we do
        </h2>
      </div>

      <p className="my-10 hidden text-center text-3xl font-semibold text-customGray md:block">
        We see design as a strategic tool, not decoration. Pretty fades, but
        purpose lingers. So we don't design for portfolios—we design for impact
        that turns heads, starts conversations, and grows businesses.
      </p>

      <p className="mt-5 mb-10 text-center text-lg font-semibold text-customGray md:hidden">
        Our passionate team of designers collaborate to create unique visual
        thinking that will surely get your brand Noticed.
      </p>

      <Separator />
    </div>
  )
}

export default Philosophy

import { Separator } from "../ui/separator"

const Philosophy = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6">
      <div className="flex justify-center">
        <h2 className="font-museo text-6xl font-bold text-customGreen md:text-7xl lg:text-9xl">
          Design Philosophy
        </h2>
      </div>

      <p className="my-10 text-center text-3xl font-semibold text-customGray">
        We see design as a strategic tool, not decoration. Pretty fades, but
        purpose lingers. So we don't design for portfolios—we design for impact
        that turns heads, starts conversations, and grows businesses.
      </p>

      <Separator />
    </div>
  )
}

export default Philosophy

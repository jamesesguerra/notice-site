import Image from "next/image"

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-15 sm:px-6">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-row items-center md:flex-col md:items-start">
          <h2 className="order-2 font-museo text-4xl font-bold md:order-1 md:mb-10 md:text-3xl">
            Our Services
          </h2>

          <Image
            src="/images/our_services-54.png"
            width={250}
            height={150}
            priority
            alt="work image"
            className="order-1 h-auto w-24 md:order-2 md:w-48 lg:w-64"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="px-6 pt-5 md:pt-0">
            <ul className="text-center leading-8 font-semibold text-customGray md:text-left">
              <li>Brand Design</li>
              <li>Brand Identity</li>
              <li>Brand Naming</li>
              <li>Brand Styleguides</li>
              <li>Collateral & Stationery</li>
              <li>Packaging</li>
              <li>Signage</li>
              <li>Content Creation</li>
              <li>Art Direction</li>
              <li>Digital Design</li>
            </ul>
          </div>

          <div className="px-6">
            <ul className="text-center leading-8 font-semibold text-customGray md:text-left">
              <li>Brand Strategy</li>
              <li>Brand Positioning</li>
              <li>Diagnosis & Research</li>
              <li>Marketing Strategy</li>
              <li>Campaign Ideation</li>
              <li>Market Analysis</li>
              <li>Insights</li>
              <li>Targeting</li>
              <li>Workshops</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

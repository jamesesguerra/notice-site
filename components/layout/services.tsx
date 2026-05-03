import Image from "next/image"

const Services = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-15 sm:px-6">
      <div className="flex justify-between">
        <div>
          <h2 className="mb-10 font-museo text-3xl font-bold">Our Services</h2>
          <Image
            src="/images/our_services-54.png"
            width={250}
            height={150}
            priority
            alt="work image"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="px-6">
            <ul className="leading-8 font-semibold text-customGray">
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
            <ul className="leading-8 font-semibold text-customGray">
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

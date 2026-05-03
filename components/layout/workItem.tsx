import Image from "next/image"

type WorkItemProps = {
  imageSrc: string
}

const WorkItem = ({ imageSrc }: WorkItemProps) => {
  return (
    <div>
      <Image
        src={imageSrc}
        width={754}
        height={495}
        priority
        alt="work image"
      />

      <div className="mt-3 flex justify-between px-2">
        <h3 className="text-xl font-semibold">Project Name</h3>

        <div className="flex items-center gap-5 text-sm">
          <div>
            <span className="mx-2 inline-block h-3 w-px bg-orange-500" />
            <span>Illustration</span>
          </div>

          <div>
            <span className="mx-2 inline-block h-3 w-px bg-orange-500" />
            <span>Branding</span>
          </div>
        </div>
      </div>

      <p className="pl-2 text-xs font-semibold text-orange-500">CLIENT</p>
    </div>
  )
}

export default WorkItem

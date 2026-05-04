import { notFound } from "next/navigation"
import { workItems } from "@/data/work"
import Image from "next/image"

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const item = workItems[slug as keyof typeof workItems]

  if (!item) return notFound()

  return (
    <section className="mx-auto max-w-7xl pt-7 md:px-4 md:pb-20">
      <div className="flex flex-col">
        {item.images.map((img) => (
          <Image
            key={img}
            src={img}
            width={1000}
            height={1000}
            alt={item.projectName}
            className="w-full"
          />
        ))}
      </div>
    </section>
  )
}

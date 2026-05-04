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
    <section className="mx-auto min-h-screen max-w-7xl pt-7 md:px-4 md:pb-20">
      <div className="flex flex-col">
        {item.images.map((img, index) => (
          <div key={img} className="relative aspect-[16/9] w-full">
            <Image
              src={img}
              alt={item.projectName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 754px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

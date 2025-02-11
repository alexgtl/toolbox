import { Tool } from '@/app/entities/Tools'
import ToolGallery from './ToolGallery'

export default function ToolRow({
  title,
  tools,
}: {
  title: string
  tools: Tool[]
}) {
  return (
    <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
      <h1 className="col-span-full text-2xl font-bold">{title}</h1>
      <ToolGallery tools={tools} />
    </section>
  )
}

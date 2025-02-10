import { Tool } from '../../entities/Tools'
import ToolCard from './ToolCard'

export default function ToolGallery({ tools }: { tools: Array<Tool> }) {
  return (
    <ul className="flex flex-wrap col-span-full gap-4">
      {tools.map((tool: Tool, index: number) => (
        <li key={index} className="grid gap-2 min-w-80">
          <ToolCard tool={tool} />
        </li>
      ))}
    </ul>
  )
}

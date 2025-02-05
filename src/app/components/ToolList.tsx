'use client'

import CategoryFilters from './CategoryFilters'
import ToolGallery from './ToolGallery'
import { Tool } from '../entities/Tools'
import { useState } from 'react'

const DEFAULT_NUMBER_OF_TOOLS: number = 30

function getFilteredToolsByNumber(
  data: Tool[],
  number: number = DEFAULT_NUMBER_OF_TOOLS,
) {
  return data.slice(0, number)
}

export default function ToolList({ tools }: { tools: any }) {
  const [filteredResults, setFilteredResults] = useState<string>('')

  const filteredDevelopmentToolsDataByNumber = getFilteredToolsByNumber(
    tools.development,
    DEFAULT_NUMBER_OF_TOOLS,
  )
  const filteredDesignToolsDataByNumber = getFilteredToolsByNumber(
    tools.design,
    DEFAULT_NUMBER_OF_TOOLS,
  )

  const filteredProductivityToolsDataByNumber = getFilteredToolsByNumber(
    tools.productivity,
    DEFAULT_NUMBER_OF_TOOLS,
  )

  const featuredDevelopmentTools = tools.development
    .filter((tool: any) => tool.featured)
    .map((tool: any) => tool)

  const featuredDesignTools = tools.design
    .filter((tool: any) => tool.featured)
    .map((tool: any) => tool)

  const featuredProducityivTools = tools.productivity
    .filter((tool: any) => tool.featured)
    .map((tool: any) => tool)

  const featuredTools = [
    ...featuredDevelopmentTools,
    ...featuredDesignTools,
    ...featuredProducityivTools,
  ]

  const handleResultsFilter = (filter: string) => {
    setFilteredResults(filter)
  }

  return (
    <>
      <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
        <h1 className="col-span-full text-2xl font-bold">Featured</h1>
        <ToolGallery tools={featuredTools} />
      </section>

      <section>
        <CategoryFilters
          filteredValue={filteredResults}
          setResults={handleResultsFilter}
        />
      </section>

      {(filteredResults === '' || filteredResults === 'development') && (
        <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
          <h1 className="col-span-full text-2xl font-bold">Development</h1>
          <ToolGallery tools={tools.development} />
        </section>
      )}

      {(filteredResults === '' || filteredResults === 'design') && (
        <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
          <h1 className="col-span-full text-2xl font-bold">Design</h1>
          <ToolGallery tools={tools.design} />
        </section>
      )}
      {(filteredResults === '' || filteredResults === 'productivity') && (
        <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
          <h1 className="col-span-full text-2xl font-bold">Productivity</h1>
          <ToolGallery tools={tools.productivity} />
        </section>
      )}
    </>
  )
}

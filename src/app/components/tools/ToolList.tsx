'use client'

import CategoryFilters from '../CategoryFilters'
import ToolGallery from './ToolGallery'
import { Tool } from '../../entities/Tools'
import { useCallback, useEffect, useMemo, useState } from 'react'
import ToolRow from './ToolRow'

const DEFAULT_NUMBER_OF_TOOLS: number = 30

enum FilterBy {
  DEVELOPMENT = 'development',
  DESIGN = 'design',
  PRODUCTIVITY = 'productivity',
}

export default function ToolList({ tools }: { tools: any }) {
  const [filteredResults, setFilteredResults] = useState<string>('')
  const [searchByQuery, setSearchByQuery] = useState<string>('')

  const getFilteredToolsByNumber = useCallback(
    (data: Tool[], number: number = DEFAULT_NUMBER_OF_TOOLS) => {
      return data.slice(0, number)
    },
    [],
  )

  const getFilteredToolsByType = useCallback((tools: Tool[]) => {
    console.log('filter tools')
    return tools.filter((tool: any) => tool.featured).map((tool: any) => tool)
  }, [])

  const filterToolsByQuery = useCallback((query: string) => {
    return tools.filter((tool: any) =>
      tool.title.toLowerCase().includes(searchByQuery.toLowerCase()),
    )
  }, [])

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

  const featuredDevelopmentTools = getFilteredToolsByType(tools.development)
  const featuredDesignTools = getFilteredToolsByType(tools.design)
  const featuredProducityivTools = getFilteredToolsByType(tools.productivity)

  let featuredTools = [
    ...featuredDevelopmentTools,
    ...featuredDesignTools,
    ...featuredProducityivTools,
  ]

  const handleResultsFilter = (filter: string) => {
    setFilteredResults(filter)
  }

  useEffect(() => {
    console.log('searchByQuery', searchByQuery)
  }, [searchByQuery])

  return (
    <>
      <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
        <h1 className="col-span-full text-2xl font-bold">Featured</h1>
        <ToolGallery tools={featuredTools} />
      </section>

      <section>
        <CategoryFilters setResults={handleResultsFilter} />
      </section>

      {(filteredResults === '' || filteredResults === FilterBy.DEVELOPMENT) && (
        <ToolRow tools={tools.development} />
      )}

      {(filteredResults === '' || filteredResults === FilterBy.DESIGN) && (
        <ToolRow tools={tools.design} />
      )}

      {(filteredResults === '' ||
        filteredResults === FilterBy.PRODUCTIVITY) && (
        <ToolRow tools={tools.productivity} />
      )}
    </>
  )
}

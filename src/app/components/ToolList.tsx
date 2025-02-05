'use client'

import CategoryFilters from './CategoryFilters'
import ToolGallery from './ToolGallery'
import { useState } from 'react'

export default function ToolList({ tools }: { tools: any }) {
  const [filteredResults, setFilteredResults] = useState<string>('')

  const handleResultsFilter = (filter: string) => {
    setFilteredResults(filter)
  }

  return (
    <>
      <section>
        <CategoryFilters
          filteredValue={filteredResults}
          setResults={handleResultsFilter}
        />
      </section>

      {(filteredResults === '' || filteredResults === 'development') && (
        <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
          <h1 className="col-span-full text-2xl font-bold">
            Development Tools
          </h1>
          <ToolGallery tools={tools.development} />
        </section>
      )}

      {(filteredResults === '' || filteredResults === 'design') && (
        <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
          <h1 className="col-span-full text-2xl font-bold">Design Tools</h1>
          <ToolGallery tools={tools.design} />
        </section>
      )}
      {(filteredResults === '' || filteredResults === 'productivity') && (
        <section className="w-full grid grid-cols-1 gap-8 sm:grid-cols-3">
          <h1 className="col-span-full text-2xl font-bold">
            Productivity Tools
          </h1>
          <ToolGallery tools={tools.productivity} />
        </section>
      )}
    </>
  )
}

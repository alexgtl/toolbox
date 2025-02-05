import Header from './components/Header'
import Footer from './components/Footer'
import ToolGallery from './components/ToolGallery'
import Sidebar from './components/Sidebar'
import { promises as fs } from 'fs'
import { Tool } from './entities/Tools'
import { Button, HStack } from '@chakra-ui/react'
import CategoryFilters from './components/CategoryFilters'
import { useState } from 'react'
import ToolList from './components/ToolList'

const DEFAULT_NUMBER_OF_TOOLS: number = 30

function getFilteredToolsByNumber(
  data: Tool[],
  number: number = DEFAULT_NUMBER_OF_TOOLS,
) {
  return data.slice(0, number)
}

export default async function Home() {
  const dataDevelopmentTools: string = await fs.readFile(
    process.cwd() + '/src/app/data/development.json',
    'utf8',
  )
  const parsedDevelopmentTools: Tool[] = JSON.parse(dataDevelopmentTools)
  const filteredDevelopmentToolsDataByNumber = getFilteredToolsByNumber(
    parsedDevelopmentTools,
    DEFAULT_NUMBER_OF_TOOLS,
  )

  const dataDesignTools = await fs.readFile(
    process.cwd() + '/src/app/data/design.json',
    'utf8',
  )
  const parsedDesignTools: Tool[] = JSON.parse(dataDesignTools)
  const filteredDesignToolsDataByNumber = getFilteredToolsByNumber(
    parsedDesignTools,
    DEFAULT_NUMBER_OF_TOOLS,
  )

  const dataProductivityTools = await fs.readFile(
    process.cwd() + '/src/app/data/productivity.json',
    'utf8',
  )
  const parsedProductivityTools: Tool[] = JSON.parse(dataProductivityTools)
  const filteredProductivityToolsDataByNumber = getFilteredToolsByNumber(
    parsedProductivityTools,
    DEFAULT_NUMBER_OF_TOOLS,
  )

  function setResultsByCategoriy() {}

  /*   const handleClick = (filter: string) => {
    console.log(filter)
  }
 */

  const tools = {
    development: parsedDevelopmentTools,
    design: parsedDesignTools,
    productivity: parsedProductivityTools,
  }

  return (
    <>
      <Header />
      <div className="max-w-[1440px] w-[97%] sm:flex gap-12 mx-auto">
        <Sidebar />
        <main className="flex flex-col gap-8 pt-8 row-start-2 sm:items-start">
          <ToolList tools={tools} />
        </main>
      </div>
      <Footer />
    </>
  )
}

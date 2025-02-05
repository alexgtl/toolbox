import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import ToolList from './components/ToolList'
import { promises as fs } from 'fs'
import { Tool } from './entities/Tools'

export default async function Home() {
  const dataDevelopmentTools: string = await fs.readFile(
    process.cwd() + '/src/app/data/development.json',
    'utf8',
  )
  const parsedDevelopmentTools: Tool[] = JSON.parse(dataDevelopmentTools)

  const dataDesignTools = await fs.readFile(
    process.cwd() + '/src/app/data/design.json',
    'utf8',
  )
  const parsedDesignTools: Tool[] = JSON.parse(dataDesignTools)

  const dataProductivityTools = await fs.readFile(
    process.cwd() + '/src/app/data/productivity.json',
    'utf8',
  )
  const parsedProductivityTools: Tool[] = JSON.parse(dataProductivityTools)

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

import Image from 'next/image'
import { Tool } from '../../entities/Tools'
import { Button, Card } from '@chakra-ui/react'
import Link from 'next/link'

import { CSSProperties } from 'react'

const headerImageStyle: CSSProperties = {
  objectFit: 'cover',
  objectPosition: 'top',
  width: '100%',
  height: '100%',
}

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link href={tool.href} target="_blank" className="block relative">
      <Card.Root
        maxW="sm"
        overflow="hidden"
        className="group relative cursor-pointer"
      >
        <div className="group-hover:blur-sm group-hover:opacity-25">
          <Card.Header className="relative h-32 w-full">
            <Image
              src={tool.imagePath}
              alt={tool.title}
              style={headerImageStyle}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          </Card.Header>
          <Card.Body gap="2">
            <Card.Title>{tool.title}</Card.Title>
          </Card.Body>
        </div>

        <div className="hidden group-hover:grid absolute h-full w-full place-items-center text-gray-100 z-10 ">
          <div className="flex flex-col items-center gap-4">
            <Card.Description className="max-w-[70%] text-gray-100 text-center">
              {tool.excerpt}
            </Card.Description>

            <Card.Footer gap="2" justifyContent="flex-end">
              <Button colorPalette="teal" variant="solid">
                Go to site
              </Button>
            </Card.Footer>
          </div>
        </div>
      </Card.Root>
    </Link>
  )
}

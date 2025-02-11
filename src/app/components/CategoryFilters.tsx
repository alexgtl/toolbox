import { HStack, Button } from '@chakra-ui/react'

export default function CategoryFilters({
  setResults,
}: {
  setResults: (filter: string) => void
}) {
  return (
    <HStack wrap="wrap" gap="4">
      <Button
        onClick={() => setResults('development')}
        variant="outline"
        className="font-bold"
        colorPalette={'teal'}
        size="md"
      >
        Development
      </Button>
      <Button
        onClick={() => setResults('design')}
        variant="outline"
        className="font-bold"
        colorPalette={'teal'}
        size="md"
      >
        Design
      </Button>
      <Button
        onClick={() => setResults('productivity')}
        variant="outline"
        className="font-bold"
        colorPalette={'teal'}
        size="md"
      >
        Productivity
      </Button>

      <Button
        onClick={() => setResults('')}
        variant="outline"
        className="font-bold"
        colorPalette={'teal'}
        size="md"
      >
        Reset filter
      </Button>
    </HStack>
  )
}

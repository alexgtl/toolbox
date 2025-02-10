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
        variant="surface"
        className="font-bold"
        size="xs"
      >
        Development
      </Button>
      <Button
        onClick={() => setResults('design')}
        variant="surface"
        className="font-bold"
        size="xs"
      >
        Design
      </Button>
      <Button
        onClick={() => setResults('productivity')}
        variant="surface"
        className="font-bold"
        size="xs"
      >
        Productivity
      </Button>

      <Button
        onClick={() => setResults('')}
        variant="surface"
        className="font-bold"
        size="xs"
      >
        Reset filter
      </Button>
    </HStack>
  )
}

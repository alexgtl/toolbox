export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-around min-h-24">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://alexgutierrez.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        @alexgutierrez.dev
      </a>

      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        2025
      </a>
    </footer>
  )
}

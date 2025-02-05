import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full relative h-48 grid place-items-center">
      <Image
        src="/assets/images/header-bg.jpg"
        alt="Header background image"
        className="absolute filter-grayscale opacity-50"
        fill
      />

      <h1 className="">
        <span>
          {' '}
          Your ultimate repository of tech tools! Discover the best tools for
          Development, Design, and Productivity, all in one place.{' '}
        </span>
      </h1>
    </header>
  )
}

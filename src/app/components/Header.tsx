import Image from 'next/image'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="w-full relative h-48 grid place-items-center">
      <Image
        src="/assets/images/header-bg.jpg"
        alt="Header background image"
        className="absolute filter-grayscale opacity-20"
        fill
        priority
      />

      <div>
        <Logo />
        <span>
          {' '}
          Your ultimate repository of tech tools! Discover the best tools for
          Development, Design, and Productivity, all in one place.{' '}
        </span>
      </div>
    </header>
  )
}

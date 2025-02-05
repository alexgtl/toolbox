export function Logo() {
  return <h1 className="text-[2.5rem] font-bold mb-2rem">Techbox.io</h1>
}

export default function Sidebar() {
  return (
    <aside className="grid sm:min-h-screen pt-8">
      <div className="w-full">
        <Logo />

        <nav className="sidebar__nav">
          <ul className="nav__main">
            <li className="sidebar__nav-item">
              <a href="">Discover</a>
            </li>
            <li className="sidebar__nav-item">
              <a href="">More</a>
            </li>
          </ul>
        </nav>

        <h3 className="sidebar__nav-separator">Categories</h3>

        <nav className="sidebar__nav">
          <ul className="nav__secondary">
            <li className="sidebar__nav-item">
              <a href="">
                <h3>Design</h3>
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="">
                <h3>Development</h3>
              </a>
            </li>
            <li className="sidebar__nav-item">
              <a href="">
                <h3>Productivity</h3>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  )
}

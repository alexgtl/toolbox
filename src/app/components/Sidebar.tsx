export default function Sidebar() {
  return (
    <aside className="grid sm:min-h-screen pt-3">
      <div className="w-full">
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

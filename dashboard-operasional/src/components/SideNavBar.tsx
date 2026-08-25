import { NavLink } from 'react-router-dom'

function SideNavBar() {
  const linkBase =
    'flex items-center gap-3 px-3 py-2.5 rounded-default font-body text-sm tracking-normal transition-colors duration-200 active:scale-95'
  const inactive =
    'text-on-surface-variant hover:text-on-surface hover:bg-surface-container hover:bg-surface-container-highest'
  const active =
    'text-primary border-r-2 border-primary bg-surface-container-high font-bold'

  return (
    <nav className="bg-surface-container-lowest h-screen w-64 border-r border-outline-variant flex flex-col h-full overflow-y-auto hidden md:flex shrink-0">
      <div className="p-6 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover"
            data-alt="A macro shot of a sleek, dark metallic clinic administrator badge with a subtle purple holographic sheen, resting on a matte black surface under highly controlled studio lighting. The aesthetic is extremely clean, precise, and tech-forward."
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXgudD0C-ab6F7mlnUazT6HCNGFyj7-lWIzNIDRn84kdnLzQA-ncdOivtUUqVW_T4P9m6R0CQls4IFLnqzFZOBXH4OaxiTbe9rgLL8gg5j7_yAq1wOHlgggcET3RwtBatz6x7PR8MjOjWi4SC2x0JIeY86SyjRDwZjhF63mgoTt6mG_YUa6WXSyOHPEE2iE3mg3nAqQIa8NaoFpOETLkxZB7GOMOipzNqPqQ-O_DYH94Ow6PiZwvPWcQ"
          />
        </div>
        <div>
          <h1 className="text-xl font-headline font-bold text-on-surface tracking-tighter">Khitan Center</h1>
          <p className="font-body text-sm tracking-normal text-on-surface-variant">Perawatan Presisi</p>
        </div>
      </div>

      <div className="px-4 pb-4 border-b border-outline-variant">
        <button className="w-full bg-primary text-on-primary font-body text-sm font-bold py-2.5 px-4 rounded-default flex items-center justify-center gap-2 hover:bg-primary-fixed-dim transition-colors duration-200 active:scale-95">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            add
          </span>
          Pemesanan Baru
        </button>
      </div>

      <ul className="flex-1 py-4 flex flex-col gap-1 px-3">
        <li>
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`} end>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              calendar_month
            </span>
            Operasional
          </NavLink>
        </li>
        <li>
          <NavLink to="/kasir" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            <span className="material-symbols-outlined">payments</span>
            Kasir
          </NavLink>
        </li>
        <li>
          <NavLink to="/akuntansi" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_balance_wallet
            </span>
            Akuntansi
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventaris" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            <span className="material-symbols-outlined">inventory_2</span>
            Inventaris
          </NavLink>
        </li>
        <li>
          <NavLink to="/crm" className={({ isActive }) => `${linkBase} ${isActive ? active : inactive}`}>
            <span className="material-symbols-outlined">hub</span>
            Pelanggan
          </NavLink>
        </li>
      </ul>

      <div className="p-4 border-t border-outline-variant">
        <ul className="flex flex-col gap-1">
          <li>
            <a
              className={`${linkBase} ${inactive}`}
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              Pengaturan
            </a>
          </li>
          <li>
            <a
              className={`${linkBase} ${inactive}`}
              href="#"
            >
              <span className="material-symbols-outlined">help</span>
              Bantuan
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SideNavBar

function TopAppBar() {
  return (
    <header className="bg-surface-container docked full-width top-0 h-16 border-b border-outline-variant flex justify-between items-center px-6 w-full sticky z-50 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="hidden md:flex relative w-64 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input
            className="w-full bg-surface-container-lowest border border-outline-variant rounded-md py-1.5 pl-9 pr-3 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            placeholder="Cari transaksi, kode..."
            type="text"
          />
        </div>
      </div>
      <div className="md:hidden absolute left-1/2 -translate-x-1/2">
        <span className="text-lg font-black text-on-surface font-headline tracking-tight">Obsidian Khitan</span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <button className="p-2 rounded-md text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border border-surface-container"></span>
        </button>
        <button className="p-2 rounded-md text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <button className="p-2 rounded-md text-on-surface-variant hover:text-primary transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface-container border border-outline-variant bg-surface-container-high ml-2">
          <span className="material-symbols-outlined text-[28px]">account_circle</span>
        </button>
      </div>
    </header>
  )
}

export default TopAppBar

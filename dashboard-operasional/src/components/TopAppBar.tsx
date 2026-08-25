function TopAppBar() {
  return (
    <header className="bg-surface-container docked full-width top-0 h-16 flex justify-between items-center px-6 w-full sticky top-0 z-50 border-b border-outline-variant shrink-0">
      <div className="flex items-center gap-6">
        <h2 className="text-lg font-black text-on-surface font-headline tracking-tight hidden lg:block">
          Obsidian Khitan
        </h2>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
            search
          </span>
          <input
            className="bg-surface-container-lowest border border-outline-variant rounded-default pl-10 pr-4 py-1.5 text-sm w-64 text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all focus:border-primary"
            placeholder="Cari catatan..."
            type="text"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-2 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-2 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">dark_mode</span>
        </button>
        <button className="text-on-surface-variant hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background p-2 rounded-full flex items-center justify-center ml-2">
          <span className="material-symbols-outlined text-[28px]">account_circle</span>
        </button>
      </div>
    </header>
  )
}

export default TopAppBar

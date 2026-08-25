function QueueCardMenunggu() {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:border-outline transition-colors duration-300 flex flex-col justify-between h-40">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-surface-container-highest rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
      <div className="flex justify-between items-start relative z-10">
        <span className="font-body text-sm font-medium text-on-surface-variant">Menunggu</span>
        <span className="material-symbols-outlined text-on-surface-variant">hourglass_empty</span>
      </div>
      <div className="relative z-10">
        <h3 className="font-headline text-4xl font-bold text-on-surface tracking-tighter">14</h3>
        <div className="flex items-center gap-1 mt-1 text-xs text-on-surface-variant">
          <span className="material-symbols-outlined text-[14px] text-tertiary">arrow_upward</span>
          <span>+2 dalam jam terakhir</span>
        </div>
      </div>
    </div>
  )
}

function QueueCardTindakan() {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:border-primary/50 transition-colors duration-300 flex flex-col justify-between h-40 ring-1 ring-inset ring-transparent hover:ring-primary/20 shadow-[0_0_15px_rgba(167,139,250,0.0)] hover:shadow-[0_0_15px_rgba(167,139,250,0.1)]">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
      <div className="flex justify-between items-start relative z-10">
        <span className="font-body text-sm font-medium text-primary">Tindakan</span>
        <span className="material-symbols-outlined text-primary animate-pulse">healing</span>
      </div>
      <div className="relative z-10">
        <h3 className="font-headline text-4xl font-bold text-on-surface tracking-tighter">3</h3>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex -space-x-2">
            <img
              className="w-5 h-5 rounded-full border border-surface-container object-cover bg-surface-container-highest"
              data-alt="A close up of a minimalist dark gray badge with a geometric purple logo, completely desaturated environment, highly sharp focus on the metallic edge of the badge."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGyANQkcJdCK5SN82I8kT0SUhZON1Q1JeAuAkR-8Z661HVe1b90T0oFXsA_9oIcg0Uehh3T6HdRv3jB7QQkrFHEULx3n1w70hJJwEW2eh4Jl_ZpqaXqDQ_JBT_3Lw1WnPxXzeecxZvxpOWvMyCZzswznBLUqZMBPNJrFaRADB_AhGvI4XdFVfeUMc7P7JkjwowiXsgJyIwe6Kg8eF0eEAOd0Dpm-b8cFWuPa-_ndIGMMF2wVC_uEuslQ"
            />
            <img
              className="w-5 h-5 rounded-full border border-surface-container object-cover bg-surface-container-highest"
              data-alt="Another minimalist dark gray badge with a tiny green accent dot, matte finish, resting in deep shadows with high contrast lighting emphasizing its circular shape."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ0BzUH0xYD10P3qQZYOgglpftT9Bw8AKnp087vocdK0SkBrt4pcg-O7UVeUEAx3LuqDEVUzl3iRv5IujEjVsa9nxN56uD3IXapGFNahUvqmItdntsNYFbQUi5ngGN546lfmSXMY0yof9muokncu2C9owWG2GGczGiXp7VdTpXVutu4WVDLhSE_34dS5MorRdK9nD2OOGH4f4v1rMlLfXHMq_VR8y8iISyn8YAi2R8XyiuMTDoCKcEoQ"
            />
          </div>
          <span className="text-xs text-on-surface-variant font-mono">Ruangan 1, 2, 4</span>
        </div>
      </div>
    </div>
  )
}

function QueueCardSelesai() {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden group hover:border-tertiary/50 transition-colors duration-300 flex flex-col justify-between h-40">
      <div className="absolute -right-6 -top-6 w-24 h-24 bg-tertiary/5 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-500" />
      <div className="flex justify-between items-start relative z-10">
        <span className="font-body text-sm font-medium text-tertiary">Selesai</span>
        <span className="material-symbols-outlined text-tertiary">task_alt</span>
      </div>
      <div className="relative z-10">
        <h3 className="font-headline text-4xl font-bold text-on-surface tracking-tighter">18</h3>
        <div className="w-full bg-surface-container-highest h-1 rounded-full mt-3 overflow-hidden">
          <div className="bg-tertiary h-full rounded-full" style={{ width: '65%' }} />
        </div>
        <p className="text-[10px] text-on-surface-variant mt-1 text-right">65% dari target harian</p>
      </div>
    </div>
  )
}

export { QueueCardMenunggu, QueueCardTindakan, QueueCardSelesai }

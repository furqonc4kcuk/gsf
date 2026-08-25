function InventarisPage() {
  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8">
      <PageHeader />
      <StatsGrid />
      <WorkspaceGrid />
      <div className="h-8" />
    </div>
  )
}

function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-headline font-bold text-on-surface">Stok &amp; Inventaris</h1>
        <p className="text-sm text-on-surface-variant mt-1">Kelola persediaan medis, lihat peringatan, dan lacak mutasi stok.</p>
      </div>
      <div className="flex gap-3">
        <button className="px-4 py-2 border border-outline-variant bg-surface-container hover:bg-surface-container-high text-on-surface text-sm font-medium rounded-md transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">download</span>
          Ekspor Daftar
        </button>
        <button className="px-4 py-2 bg-primary hover:bg-primary-fixed-dim text-on-primary text-sm font-medium rounded-md transition-colors shadow-[0_0_12px_rgba(167,139,250,0.2)] flex items-center gap-2">
          <span className="material-symbols-outlined text-[18px]">add_box</span>
          Terima Stok
        </button>
      </div>
    </div>
  )
}

function StatsGrid() {
  const stats = [
    { label: 'Alat Medis', value: '1.248', trend: '+12%', trendColor: 'text-tertiary', icon: 'medical_services', bg: 'bg-primary/5' },
    { label: 'Obat-obatan', value: '856', trend: 'Stabil', trendColor: 'text-on-surface-variant', icon: 'medication', bg: 'bg-surface-container' },
    { label: 'Peringatan Stok Rendah', value: '12', trend: '', trendColor: 'text-error', icon: 'warning', bg: 'bg-error/5', border: 'border-error/30', topBar: true },
    { label: 'Kadaluarsa &lt; 30 Hari', value: '5', trend: 'Butuh tindakan', trendColor: 'text-primary-fixed-dim', icon: 'event_busy', bg: 'bg-surface-container', border: 'border-outline-variant' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`bg-surface-container border rounded-lg p-5 flex flex-col justify-between group hover:border-outline transition-colors relative overflow-hidden ${stat.border || 'border-outline-variant'}`}
        >
          {stat.topBar && <div className="absolute top-0 left-0 w-full h-1 bg-error" />}
          <div className={`absolute -right-4 -top-4 w-24 h-24 rounded-full blur-xl group-hover:opacity-80 transition-opacity ${stat.bg}`} />
          <div className="flex items-center gap-3 text-on-surface-variant mb-4">
            <span className="material-symbols-outlined text-primary">{stat.icon}</span>
            <span className="text-sm font-medium">{stat.label}</span>
          </div>
          <div className="flex items-end justify-between">
            <span className={`text-3xl font-headline font-bold ${stat.trendColor === 'text-error' ? 'text-error' : 'text-on-surface'}`}>{stat.value}</span>
            {stat.trend && (
              <span className={`text-xs flex items-center font-medium px-2 py-0.5 rounded-full border ${stat.trendColor === 'text-tertiary' ? 'bg-tertiary/10 text-tertiary border-tertiary/20' : stat.trendColor === 'text-error' ? 'bg-error/10 text-error border-error/20' : stat.trendColor === 'text-primary-fixed-dim' ? 'bg-primary-fixed/10 text-primary-fixed-dim border-primary-fixed/20' : 'bg-surface-container-highest text-on-surface-variant border-outline-variant'}`}>
                {stat.label.includes('Stok Rendah') && <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span>}
                {stat.trend}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

function WorkspaceGrid() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <InventoryList />
      <TransactionLog />
    </div>
  )
}

function InventoryList() {
  const items = [
    { name: 'Surgi-Blade #10', code: 'DISP-0921', category: 'Alat Sekali Pakai', stock: '850 pcs', status: 'Tersedia', statusColor: 'text-tertiary', statusBg: 'bg-tertiary/10', statusBorder: 'border-tertiary/20' },
    { name: 'Lidocaine 2% Injeksi', code: 'MED-442A', category: 'Obat', stock: '12 ampul', status: 'Stok Rendah (Min: 50)', statusColor: 'text-error', statusBg: 'bg-error/10', statusBorder: 'border-error/30', low: true },
    { name: 'Gomco Clamp 1.1cm', code: 'REUS-G11', category: 'Alat Pakai Ulang', stock: '24 unit', status: 'Tersedia', statusColor: 'text-tertiary', statusBg: 'bg-tertiary/10', statusBorder: 'border-tertiary/20' },
    { name: 'Larutan Chlorhexidine', code: 'MED-899B', category: 'Obat', stock: '45 botol', status: 'Kadaluarsa 12 Hari', statusColor: 'text-primary-fixed-dim', statusBg: 'bg-primary-fixed/10', statusBorder: 'border-primary-fixed/20' },
    { name: 'Kasa Steril 4x4', code: 'DISP-221', category: 'Persediaan Sekali Pakai', stock: '2.400 pak', status: 'Tersedia', statusColor: 'text-tertiary', statusBg: 'bg-tertiary/10', statusBorder: 'border-tertiary/20' },
  ]

  return (
    <div className="xl:col-span-2 bg-surface-container border border-outline-variant rounded-lg flex flex-col overflow-hidden">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
        <h2 className="text-sm font-headline font-semibold text-on-surface">Direktori Inventaris</h2>
        <div className="flex gap-2">
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface rounded hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-[18px]">filter_list</span>
          </button>
          <button className="p-1.5 text-on-surface-variant hover:text-on-surface rounded hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined text-[18px]">more_vert</span>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-surface-container-highest/50 text-on-surface-variant text-xs uppercase tracking-wider">
            <tr>
              <th className="px-4 py-3 font-medium border-b border-outline-variant">Kode Item / Nama</th>
              <th className="px-4 py-3 font-medium border-b border-outline-variant">Kategori</th>
              <th className="px-4 py-3 font-medium border-b border-outline-variant">Tingkat Stok</th>
              <th className="px-4 py-3 font-medium border-b border-outline-variant">Status</th>
              <th className="px-4 py-3 font-medium border-b border-outline-variant text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {items.map((item) => (
              <tr key={item.code} className={`hover:bg-surface-container-highest/30 transition-colors group ${item.low ? 'bg-error/5' : ''}`}>
                <td className="px-4 py-3">
                  <div className="font-medium text-on-surface">{item.name}</div>
                  <div className="text-xs text-on-surface-variant font-mono mt-0.5">{item.code}</div>
                </td>
                <td className="px-4 py-3 text-on-surface-variant">{item.category}</td>
                <td className={`px-4 py-3 font-mono ${item.low ? 'text-error font-bold' : 'text-on-surface'}`}>{item.stock}</td>
                <td className="px-4 py-3">
                  <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium border ${item.statusBg} ${item.statusColor} ${item.statusBorder}`}>
                    {item.status.includes('Tersedia') && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                    {item.status.includes('Stok Rendah') && <span className="w-1.5 h-1.5 rounded-full bg-error animate-pulse" />}
                    {item.status.includes('Kadaluarsa') && <span className="material-symbols-outlined text-[14px]">timer</span>}
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  {item.low ? (
                    <div className="flex items-center justify-end gap-2">
                      <button className="text-primary hover:text-primary-fixed text-xs font-medium uppercase tracking-wide">Pesan Ulang</button>
                      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100 align-middle">
                        <span className="material-symbols-outlined text-[18px]">edit</span>
                      </button>
                    </div>
                  ) : (
                    <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100">
                      <span className="material-symbols-outlined text-[18px]">edit</span>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 border-t border-outline-variant bg-surface-container-lowest text-center">
        <button className="text-sm text-primary hover:text-primary-fixed-dim font-medium transition-colors">Lihat Semua Inventaris</button>
      </div>
    </div>
  )
}

function TransactionLog() {
  const logs = [
    { title: 'Dikeluarkan untuk Operasi #1042', item: 'Lidocaine 2% Injeksi', delta: '-5 unit', deltaColor: 'text-error', icon: 'arrow_upward', time: 'Hari ini, 14:32' },
    { title: 'Isi Ulang Klinik (Ruang B)', item: 'Kasa Steril 4x4', delta: '-50 pcs', deltaColor: 'text-error', icon: 'arrow_upward', time: 'Hari ini, 10:15' },
    { title: 'Pengiriman Pemasok (MedEquip)', item: 'Surgi-Blade #10', delta: '+200 pcs', deltaColor: 'text-tertiary', icon: 'arrow_downward', time: 'Kemarin, 16:45' },
    { title: 'Kembali setelah sterilisasi', item: 'Gomco Clamp 1.1cm', delta: '+12 unit', deltaColor: 'text-tertiary', icon: 'keyboard_return', time: 'Kemarin, 09:00' },
  ]

  return (
    <div className="bg-surface-container border border-outline-variant rounded-lg flex flex-col h-full overflow-hidden">
      <div className="p-4 border-b border-outline-variant bg-surface-container-lowest flex justify-between items-center">
        <h2 className="text-sm font-headline font-semibold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[18px]">sync_alt</span>
          Mutasi Terbaru
        </h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {logs.map((log, i) => (
          <div key={i} className="flex items-start gap-3 relative before:absolute before:left-3.5 before:top-8 before:bottom-[-16px] before:w-[1px] before:bg-outline-variant last:before:hidden">
            <div className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 z-10 ${log.deltaColor === 'text-tertiary' ? 'bg-tertiary/10 border-tertiary/20' : 'bg-surface-container-highest border-outline-variant'}`}>
              <span className={`material-symbols-outlined text-[14px] ${log.deltaColor === 'text-tertiary' ? 'text-tertiary' : 'text-on-surface-variant'}`}>{log.icon}</span>
            </div>
            <div className="flex-1 min-w-0 pt-0.5">
              <div className="flex justify-between items-start mb-1">
                <p className="text-sm font-medium text-on-surface truncate">{log.title}</p>
                <span className={`text-xs font-mono whitespace-nowrap ${log.deltaColor}`}>{log.delta}</span>
              </div>
              <p className="text-xs text-on-surface-variant">{log.item}</p>
              <p className="text-[10px] text-outline mt-1 font-mono">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-3 border-t border-outline-variant bg-surface-container-lowest text-center">
        <button className="text-sm text-on-surface-variant hover:text-on-surface transition-colors flex items-center justify-center w-full gap-1">
          <span className="material-symbols-outlined text-[16px]">history</span>
          Log Audit Lengkap
        </button>
      </div>
    </div>
  )
}

export default InventarisPage

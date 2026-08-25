function AkuntansiPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader />
      <BentoGrid />
    </div>
  )
}

function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">Ikhtisar Keuangan</h2>
        <p className="text-sm text-on-surface-variant mt-1">Laba/Rugi waktu nyata, bagi hasil, dan metrik operasional.</p>
      </div>
      <div className="flex items-center gap-2">
        <select className="bg-surface-container text-sm border border-outline-variant rounded-md px-3 py-1.5 focus:ring-2 focus:ring-primary focus:outline-none">
          <option>Bulan Ini</option>
          <option>Bulan Lalu</option>
          <option>Q3 2023</option>
          <option>YTD</option>
        </select>
        <button className="bg-surface-container hover:bg-surface-container-highest text-on-surface text-sm border border-outline-variant rounded-md px-4 py-1.5 transition-colors flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">download</span>
          Ekspor
        </button>
      </div>
    </div>
  )
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <PLChartCard />
      <TopPackagesCard />
      <FeeSharingCard />
      <BMHPCard />
    </div>
  )
}

function PLChartCard() {
  return (
    <div className="md:col-span-2 bg-surface-container border border-outline-variant rounded-xl p-5 flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="flex justify-between items-start mb-6 z-10">
        <div>
          <h3 className="text-base font-medium text-on-surface font-headline">Laba/Rugi Bersih</h3>
          <div className="text-3xl font-bold font-headline tracking-tighter mt-1 text-on-surface">Rp 12.5M</div>
          <div className="flex items-center gap-1 mt-1 text-tertiary text-xs font-medium">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            <span>+12.4% vs bulan lalu</span>
          </div>
        </div>
        <div className="flex gap-1 bg-surface-container-lowest border border-outline-variant rounded-md p-1">
          <button className="px-2 py-1 text-xs font-medium rounded bg-surface-container text-on-surface border border-outline-variant shadow-sm">
            Pendapatan
          </button>
          <button className="px-2 py-1 text-xs font-medium rounded text-on-surface-variant hover:text-on-surface transition-colors">
            Pengeluaran
          </button>
        </div>
      </div>
      <div className="flex-1 flex items-end gap-2 h-48 mt-auto z-10 pt-4">
        <div className="w-full flex justify-between items-end h-full group-hover:opacity-100 opacity-90 transition-opacity">
          {[
            { h: '40%', v: 'Rp24M' },
            { h: '35%', v: 'Rp21M' },
            { h: '55%', v: 'Rp32M' },
            { h: '50%', v: 'Rp28M' },
            { h: '70%', v: 'Rp45M' },
            { h: '65%', v: 'Rp41M' },
            { h: '85%', v: 'Rp58M', primary: true },
          ].map((bar, i) => (
            <div
              key={i}
              className={`w-[8%] border rounded-t-sm relative hover:border-primary/50 transition-colors cursor-pointer group/bar ${
                bar.primary
                  ? 'bg-primary bg-opacity-80 border-primary/50 shadow-[0_0_15px_rgba(167,139,250,0.1)]'
                  : 'bg-surface-container-highest border-outline-variant hover:bg-primary/20'
              }`}
              style={{ height: bar.h }}
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-on-surface-variant opacity-0 group-hover/bar:opacity-100 transition-opacity">
                {bar.v}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between mt-3 text-[10px] text-on-surface-variant font-mono uppercase tracking-wider">
        <span>Sen</span>
        <span>Sel</span>
        <span>Rab</span>
        <span>Kam</span>
        <span>Jum</span>
        <span>Sab</span>
        <span>Min</span>
      </div>
    </div>
  )
}

function TopPackagesCard() {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-5 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-medium text-on-surface font-headline">Paket Terlaris</h3>
        <button className="text-on-surface-variant hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-sm">more_horiz</span>
        </button>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center relative py-4">
        <div className="w-32 h-32 rounded-full border-[12px] border-surface-container-highest relative flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="100 151" strokeWidth="12" className="text-primary drop-shadow-[0_0_8px_rgba(167,139,250,0.4)]" />
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="60 191" strokeDashoffset="-105" strokeWidth="12" className="text-tertiary" />
            <circle cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeDasharray="30 221" strokeDashoffset="-170" strokeWidth="12" className="text-secondary-fixed" />
          </svg>
          <div className="text-center">
            <div className="text-xs text-on-surface-variant">Total</div>
            <div className="text-lg font-bold text-on-surface font-headline">342</div>
          </div>
        </div>
      </div>
      <div className="space-y-3 mt-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_5px_rgba(167,139,250,0.5)]" />
            <span className="text-on-surface">Metode Laser</span>
          </div>
          <span className="font-mono text-on-surface-variant">45%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_5px_rgba(52,211,153,0.3)]" />
            <span className="text-on-surface">Smart Clamp</span>
          </div>
          <span className="font-mono text-on-surface-variant">32%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary-fixed" />
            <span className="text-on-surface">Konvensional</span>
          </div>
          <span className="font-mono text-on-surface-variant">23%</span>
        </div>
      </div>
    </div>
  )
}

function FeeSharingCard() {
  return (
    <div className="md:col-span-2 bg-surface-container border border-outline-variant rounded-xl p-0 overflow-hidden flex flex-col">
      <div className="p-5 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
        <div>
          <h3 className="text-base font-medium text-on-surface font-headline">Ringkasan Bagi Hasil</h3>
          <p className="text-xs text-on-surface-variant mt-0.5">Alokasi terakumulasi untuk staf medis &amp; transportasi.</p>
        </div>
        <button className="text-primary text-sm font-medium hover:text-primary-fixed-dim transition-colors flex items-center gap-1">
          Selesaikan Pembayaran
          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-surface-container-highest border-b border-outline-variant text-xs text-on-surface-variant uppercase tracking-wider font-mono">
            <tr>
              <th className="px-5 py-3 font-medium">Peran</th>
              <th className="px-5 py-3 font-medium">Jumlah Anggota</th>
              <th className="px-5 py-3 font-medium">Prosedur</th>
              <th className="px-5 py-3 font-medium">Total Bagian</th>
              <th className="px-5 py-3 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/50">
            {[
              { role: 'Dokter Operator', icon: 'stethoscope', count: '4 Aktif', proc: '342', total: 'Rp 5.5M', status: 'Tertunda' },
              { role: 'Asisten Perawat', icon: 'medical_services', count: '8 Aktif', proc: '342', total: 'Rp 4.2M', status: 'Tertunda' },
              { role: 'Driver Home-Care', icon: 'local_taxi', count: '3 Aktif', proc: '128 Perjalanan', total: 'Rp 2.8M', status: 'Selesai' },
            ].map((row) => (
              <tr key={row.role} className="hover:bg-surface-container-highest transition-colors group">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded border flex items-center justify-center transition-colors ${row.role === 'Dokter Operator' ? 'bg-primary/10 border-primary/20 text-primary group-hover:bg-primary group-hover:text-on-primary' : 'bg-surface-container-highest border-outline-variant text-on-surface-variant group-hover:border-primary/50'}`}>
                      <span className="material-symbols-outlined text-[18px]">{row.icon}</span>
                    </div>
                    <span className="font-medium text-on-surface">{row.role}</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-on-surface-variant">{row.count}</td>
                <td className="px-5 py-4 text-on-surface-variant">{row.proc}</td>
                <td className="px-5 py-4 font-mono font-medium text-on-surface">{row.total}</td>
                <td className="px-5 py-4 text-right">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium ${row.status === 'Tertunda' ? 'bg-tertiary/10 text-tertiary border border-tertiary/20' : 'bg-surface-container-highest text-on-surface-variant border border-outline-variant'}`}>
                    {row.status === 'Tertunda' && <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />}
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function BMHPCard() {
  const items = [
    { name: 'Barang Habis Pakai (Kit)', value: 'Rp 6.2M', pct: 85, color: 'bg-error' },
    { name: 'Sterilisasi', value: 'Rp 4.5M', pct: 45, color: 'bg-primary' },
    { name: 'Anestesi', value: 'Rp 3.1M', pct: 30, color: 'bg-tertiary' },
  ]

  return (
    <div className="bg-surface-container border border-outline-variant rounded-xl p-0 flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #27272a 0, #27272a 1px, transparent 1px, transparent 10px)' }} />
      <div className="p-5 border-b border-outline-variant relative z-10">
        <h3 className="text-base font-medium text-on-surface font-headline">Pelacakan BMHP</h3>
        <p className="text-xs text-on-surface-variant mt-1">Perlengkapan medis &amp; biaya operasional.</p>
      </div>
      <div className="p-5 flex-1 flex flex-col gap-5 relative z-10 bg-surface-container-lowest/50">
        {items.map((item) => (
          <div key={item.name}>
            <div className="flex justify-between text-sm mb-1.5">
              <span className="text-on-surface font-medium">{item.name}</span>
              <span className={`font-mono ${item.color === 'bg-error' ? 'text-error' : 'text-on-surface'}`}>{item.value}</span>
            </div>
            <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
              <div className={`h-full ${item.color} rounded-full relative ${item.name === 'Barang Habis Pakai (Kit)' ? 'w-[85%]' : item.name === 'Sterilisasi' ? 'w-[45%]' : 'w-[30%]'}`}>
                {item.name === 'Barang Habis Pakai (Kit)' && <div className="absolute inset-0 bg-white/20 w-full animate-[pulse_2s_ease-in-out_infinite]" />}
              </div>
            </div>
            <div className="text-[10px] text-on-surface-variant mt-1 text-right">{item.pct}% dari anggaran bulanan</div>
          </div>
        ))}
        <button className="mt-auto w-full py-2 text-xs font-medium text-on-surface-variant hover:text-on-surface border border-outline-variant hover:border-outline rounded-md transition-colors bg-surface-container">
          Lihat Biaya Inventaris Lengkap
        </button>
      </div>
    </div>
  )
}

export default AkuntansiPage

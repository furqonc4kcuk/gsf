function CrmPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader />
      <MetricsGrid />
      <MainGrid />
    </div>
  )
}

function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-on-surface mb-1">CRM Pelanggan</h2>
        <p className="text-sm text-on-surface-variant">Kelola hubungan klien, referal, dan komunikasi otomatis.</p>
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-surface-container-high border border-outline-variant text-on-surface px-4 py-2 rounded flex items-center gap-2 hover:bg-surface-container-highest transition-colors active:scale-95 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background text-sm font-medium">
          <span className="material-symbols-outlined text-sm">download</span>
          Ekspor Data
        </button>
        <button className="bg-primary text-on-primary px-4 py-2 rounded flex items-center gap-2 hover:bg-primary-fixed-dim transition-colors active:scale-95 focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background text-sm font-medium shadow-[0_0_15px_rgba(167,139,250,0.3)]">
          <span className="material-symbols-outlined text-sm">verified</span>
          Buat E-Sertifikat
        </button>
      </div>
    </div>
  )
}

function MetricsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <MetricCard
        icon="groups"
        label="Total Pasien (Aktif)"
        value="1,248"
        trend="+12% bulan ini"
        trendColor="text-tertiary"
        trendIcon="trending_up"
      />
      <MetricCard
        icon="share"
        label="Konversi Referal"
        value="342"
        trend="Perujuk Teratas:"
        trendHighlight="Dr. A. Rahman"
        trendColor="text-primary"
      />
      <MetricCard
        icon="mark_email_read"
        label="Otomatisasi WhatsApp"
        value="98.5%"
        trend="Tingkat Keberhasilan Pengiriman"
        progress={98.5}
        progressColor="bg-tertiary"
      />
    </div>
  )
}

interface MetricCardProps {
  icon: string
  label: string
  value: string
  trend: string
  trendColor?: string
  trendIcon?: string
  trendHighlight?: string
  progress?: number
  progressColor?: string
}

function MetricCard({ icon, label, value, trend, trendColor = 'text-tertiary', trendIcon, trendHighlight, progress, progressColor = 'bg-tertiary' }: MetricCardProps) {
  return (
    <div className="bg-surface-container border border-outline-variant rounded-lg p-5 flex flex-col relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <span className={`material-symbols-outlined text-6xl ${trendColor.replace('text-', 'text-')}`}>{icon}</span>
      </div>
      <span className="text-on-surface-variant text-sm font-medium mb-2">{label}</span>
      <div className="text-3xl font-headline font-bold text-on-surface mb-1">{value}</div>
      <div className={`flex items-center gap-1 text-xs ${trendColor}`}>
        {trendIcon && <span className="material-symbols-outlined text-[14px]">{trendIcon}</span>}
        <span>{trend}</span>
        {trendHighlight && <span className="font-medium text-on-surface">{trendHighlight}</span>}
      </div>
      {progress !== undefined && (
        <div className="w-full bg-surface-container-lowest h-1.5 mt-3 rounded-full overflow-hidden">
          <div className={`${progressColor} h-full rounded-full`} style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  )
}

function MainGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <CustomerDatabase />
      <WhatsAppAutomation />
    </div>
  )
}

function CustomerDatabase() {
  const patients = [
    { name: 'Bima Aditya', id: 'PT-2023-0891', age: 8, status: 'Pemulihan Pasca-Operasi', statusColor: 'text-tertiary', statusBg: 'bg-tertiary-container/20', statusBorder: 'border-tertiary-container/30', referred: 'Pencarian Organik', refIcon: 'link', refColor: 'text-on-surface-variant', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvwGISTPx_pmy5ddbF1TkHcjPo1M1Wirl7QMltJ11NSHIDWbGTDcV_WXbpjwGrqnQsXspuTVTusi80GuRHzVy_I1dlpMzKns6tb-k6yuH2b4JxcZoNxZsWnvt2OVleGdWClZDu0Y9qU8D25lyuvzvxZNWKoJLIKwRB1L72Clf1RqmjR9fE2FyLcjG2g8Jd66g_Oil1MHkWh1AXgMZQGU6j2LBNVnuiWC-uGbgZtikkRQg4q8mR-0DDBw' },
    { name: 'Rizky Fauzi', id: 'PT-2023-0892', age: 10, status: 'Selesai', statusColor: 'text-on-surface-variant', statusBg: 'bg-surface-container-lowest', statusBorder: 'border-outline-variant', referred: 'Keluarga Bima (Ref)', refIcon: 'stars', refColor: 'text-primary', initials: 'RF' },
    { name: 'Arif Nugroho', id: 'PT-2023-0893', age: 7, status: 'Dijadwalkan (Besok)', statusColor: 'text-primary', statusBg: 'bg-primary-container/20', statusBorder: 'border-primary-container/30', referred: 'Iklan Instagram', refIcon: 'link', refColor: 'text-on-surface-variant', initials: 'AN' },
  ]

  return (
    <div className="lg:col-span-2 bg-surface-container border border-outline-variant rounded-lg flex flex-col h-[600px]">
      <div className="p-5 border-b border-outline-variant flex items-center justify-between">
        <h3 className="font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-sm">database</span>
          Database Pasien
        </h3>
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
          <input
            className="bg-surface-container-lowest border border-outline-variant rounded-md pl-9 pr-4 py-1.5 text-sm text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary w-64 transition-all outline-none"
            placeholder="Cari pasien atau perujuk..."
            type="text"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-0">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-surface-container z-10 border-b border-outline-variant text-xs uppercase text-on-surface-variant">
            <tr>
              <th className="px-5 py-3 font-medium">Info Pasien</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium">Dirujuk Oleh</th>
              <th className="px-5 py-3 font-medium text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-outline-variant">
            {patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-surface-container-highest/50 transition-colors group">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-surface-container-lowest border border-outline-variant overflow-hidden flex-shrink-0">
                      {patient.avatar ? (
                        <img alt="Avatar" className="w-full h-full object-cover grayscale opacity-80" data-alt="A portrait of a young boy looking calm, well-lit in a clinical setting. Minimalist dark UI avatar placeholder style, high contrast, sharp focus." src={patient.avatar} />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs font-bold text-on-surface">{patient.initials}</div>
                      )}
                    </div>
                    <div>
                      <div className="font-medium text-on-surface group-hover:text-primary transition-colors">{patient.name}</div>
                      <div className="text-xs text-on-surface-variant">ID: {patient.id} • Usia: {patient.age}</div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className={`inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium ${patient.statusBg} ${patient.statusColor} border ${patient.statusBorder}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    {patient.status}
                  </span>
                </td>
                <td className="px-5 py-4">
                  <div className={`flex items-center gap-1 ${patient.refColor}`}>
                    <span className="material-symbols-outlined text-[14px]">{patient.refIcon}</span>
                    {patient.referred}
                  </div>
                </td>
                <td className="px-5 py-4 text-right">
                  <button className="text-on-surface-variant hover:text-primary transition-colors p-1 rounded-md hover:bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-sm">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-3 border-t border-outline-variant flex items-center justify-center gap-2 text-xs text-on-surface-variant bg-surface-container-lowest/50 rounded-b-lg">
        <button className="hover:text-primary disabled:opacity-50"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
        <span>Halaman 1 dari 42</span>
        <button className="hover:text-primary"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
      </div>
    </div>
  )
}

function WhatsAppAutomation() {
  const logs = [
    { title: 'Pengingat Pra-Operasi Terkirim', time: '10 mnt lalu', to: '+62 812-3456-XXXX (Arif N.)', template: 'H-1_Prep_Guide', type: 'success' },
    { title: 'E-Sertifikat Terkirim', time: '1 jam lalu', to: '+62 813-9876-XXXX (Rizky F.)', template: 'Aset: cert_892.pdf terlampir.', type: 'success' },
    { title: 'Pemeriksaan Pasca-Operasi (H+3)', time: 'Dijadwalkan 14:00', to: 'Target: Bima Aditya', template: 'Recovery_Check_H3', type: 'pending' },
    { title: 'Pengiriman Gagal', time: 'Kemarin', to: 'Alasan: Format Nomor WhatsApp tidak valid.', template: 'Tindakan diperlukan di CRM.', type: 'error' },
  ]

  return (
    <div className="bg-surface-container border border-outline-variant rounded-lg flex flex-col h-[600px]">
      <div className="p-5 border-b border-outline-variant flex items-center justify-between">
        <h3 className="font-bold text-on-surface flex items-center gap-2">
          <span className="material-symbols-outlined text-tertiary text-sm">forum</span>
          Otomatisasi WA
        </h3>
        <button className="text-primary hover:text-on-primary-container text-xs font-medium transition-colors">Kelola Hooks</button>
      </div>
      <div className="flex-1 overflow-y-auto p-5 relative">
        <div className="absolute left-7 top-5 bottom-5 w-px bg-outline-variant" />
        <div className="space-y-6 relative">
          {logs.map((log, i) => (
            <div key={i} className="flex gap-4 relative">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 z-10 mt-0.5 ${log.type === 'success' ? 'bg-surface-container border-tertiary' : log.type === 'pending' ? 'bg-surface-container border-primary border-dashed' : 'bg-surface-container border-error'}`}>
                {log.type === 'success' && <span className="material-symbols-outlined text-[10px] text-tertiary font-bold">check</span>}
                {log.type === 'pending' && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                {log.type === 'error' && <span className="material-symbols-outlined text-[10px] text-error font-bold">close</span>}
              </div>
              <div className={`flex-1 ${log.type === 'pending' ? 'opacity-70' : ''}`}>
                <div className="flex justify-between items-start mb-1">
                  <div className="text-sm font-medium text-on-surface">{log.title}</div>
                  <div className={`text-xs ${log.type === 'error' ? 'text-error' : 'text-on-surface-variant'}`}>{log.time}</div>
                </div>
                <div className={`text-xs p-2 rounded border mt-2 font-mono ${log.type === 'error' ? 'text-on-error-container bg-error-container/20 border-error-container' : 'text-on-surface-variant bg-surface-container-lowest border-outline-variant'}`}>
                  {log.to}<br />
                  {log.template}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-outline-variant bg-surface-container-lowest/50 rounded-b-lg">
        <div className="flex items-center justify-between text-xs">
          <span className="text-on-surface-variant flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-tertiary" /> Server Terhubung</span>
          <span className="text-on-surface-variant">Ping terakhir: 2d yang lalu</span>
        </div>
      </div>
    </div>
  )
}

export default CrmPage

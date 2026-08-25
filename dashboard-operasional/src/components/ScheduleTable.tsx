interface ScheduleRow {
  time: string
  patient: string
  method: string
  doctor: string
  status: 'in-progress' | 'waiting' | 'completed'
}

const scheduleData: ScheduleRow[] = [
  { time: '09:15', patient: 'Ahmad F. (8y)', method: 'Metode Laser', doctor: 'Ns. Arif Rahman H', status: 'in-progress' },
  { time: '10:30', patient: 'Rizky (10y)', method: 'Smart Clamp', doctor: 'Ns. Desi Putri Hermawati ', status: 'waiting' },
  { time: '08:00', patient: 'Bima (12y)', method: 'Konvensional', doctor: 'Ns. Umairatul W', status: 'completed' },
  { time: '11:00', patient: 'Dika (7y)', method: 'Metode Laser', doctor: 'Ns. Ifirlana H', status: 'waiting' },
]

function StatusBadge({ status }: { status: ScheduleRow['status'] }) {
  if (status === 'in-progress') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        Tindakan
      </span>
    )
  }
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold text-tertiary">
        <span className="material-symbols-outlined text-[14px]">check</span>
        Selesai
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-surface-container-highest text-on-surface-variant border border-outline-variant">
      <span className="w-1.5 h-1.5 rounded-full bg-outline" />
      Menunggu
    </span>
  )
}

function ScheduleTable() {
  return (
    <div className="col-span-1 lg:col-span-8 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col min-h-[400px]">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center">
        <h3 className="font-headline font-bold text-on-surface text-lg">Jadwal Hari Ini</h3>
        <div className="flex bg-surface-container border border-outline-variant rounded-default p-1">
          <button className="px-3 py-1 bg-surface-container-lowest text-primary rounded shadow-sm text-xs font-bold border border-outline-variant">
            Daftar
          </button>
          <button className="px-3 py-1 text-on-surface-variant hover:text-on-surface rounded text-xs font-medium transition-colors">
            Kalender
          </button>
        </div>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="text-xs text-on-surface-variant border-b border-outline-variant bg-surface-container/50">
              <th className="py-3 px-6 font-medium">Waktu</th>
              <th className="py-3 px-6 font-medium">Pasien</th>
              <th className="py-3 px-6 font-medium">Metode</th>
              <th className="py-3 px-6 font-medium">Dokter</th>
              <th className="py-3 px-6 font-medium text-right">Status</th>
            </tr>
          </thead>
          <tbody className="text-sm font-body">
            {scheduleData.map((row) => (
              <tr
                key={row.time}
                className={`border-b border-outline-variant/30 hover:bg-surface-container/50 transition-colors group cursor-pointer ${
                  row.status === 'waiting' && row.time === '10:30' ? 'bg-surface-container-highest/20' : ''
                } ${row.status === 'completed' ? 'opacity-75' : ''}`}
              >
                <td
                  className={`py-3.5 px-6 font-mono font-medium ${
                    row.status === 'in-progress' ? 'text-primary' : 'text-on-surface-variant'
                  }`}
                >
                  {row.time}
                </td>
                <td
                  className={`py-3.5 px-6 font-medium ${
                    row.status === 'completed'
                      ? 'text-on-surface line-through decoration-on-surface-variant/50'
                      : 'text-on-surface'
                  }`}
                >
                  {row.patient}
                </td>
                <td className="py-3.5 px-6 text-on-surface-variant">{row.method}</td>
                <td className="py-3.5 px-6 text-on-surface-variant text-xs">{row.doctor}</td>
                <td className="py-3.5 px-6 text-right">
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ScheduleTable

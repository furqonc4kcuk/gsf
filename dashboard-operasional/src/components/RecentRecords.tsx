interface RecordItem {
  id: string
  time: string
  description: string
  doctor: string
}

const records: RecordItem[] = [
  {
    id: 'REC-20231024-01',
    time: '10m lalu',
    description: 'Catatan pasca operasi ditambahkan untuk pasien Ahmad F. Penyembuhan berjalan normal.',
    doctor: 'Dr. Andi',
  },
  {
    id: 'REC-20231024-02',
    time: '1j lalu',
    description: 'Laporan prosedur selesai untuk Bima. Metode smart clamp berhasil digunakan.',
    doctor: 'Dr. Hendra',
  },
]

function RecentRecords() {
  return (
    <div className="col-span-1 lg:col-span-4 bg-surface-container-lowest border border-outline-variant rounded-xl flex flex-col">
      <div className="p-4 border-b border-outline-variant flex justify-between items-center">
        <h3 className="font-headline font-bold text-on-surface text-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-[20px]">history</span>
          Catatan Terbaru
        </h3>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-3">
        {records.map((record) => (
          <div
            key={record.id}
            className="p-3 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-highest transition-colors cursor-pointer group"
          >
            <div className="flex justify-between items-start mb-1">
              <h4 className="text-sm font-medium text-on-surface group-hover:text-primary transition-colors">
                {record.id}
              </h4>
              <span className="text-[10px] font-mono text-on-surface-variant">{record.time}</span>
            </div>
            <p className="text-xs text-on-surface-variant mb-2">{record.description}</p>
            <div className="flex items-center gap-1 text-[10px] text-tertiary">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              Ditandatangani oleh {record.doctor}
            </div>
          </div>
        ))}

        <button className="mt-auto w-full py-2.5 rounded border border-dashed border-outline hover:border-primary hover:text-primary text-on-surface-variant text-sm font-medium transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[18px]">search</span>
          Cari semua catatan
        </button>
      </div>
    </div>
  )
}

export default RecentRecords

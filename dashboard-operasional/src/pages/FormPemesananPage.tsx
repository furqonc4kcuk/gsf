import { useState } from 'react'

function FormPemesananPage() {
  const [form, setForm] = useState({
    nama: '',
    usia: '',
    kategori: '',
    alamat: '',
    paket: '',
    obat: '',
    lokasi: 'klinik',
    tanggal: '',
    jam: '',
  })

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Pemesanan berhasil disimpan!')
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8">
        <nav className="flex items-center gap-2 text-sm text-on-surface-variant mb-2 font-medium" aria-label="Breadcrumb">
          <span>Operasional</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary">Pemesanan Baru</span>
        </nav>
        <h2 className="text-3xl font-headline font-bold tracking-tight text-on-surface">Form Pemesanan Baru</h2>
        <p className="text-on-surface-variant mt-1 text-sm">Lengkapi data di bawah ini untuk membuat jadwal tindakan khitan baru.</p>
      </div>

      {/* Form */}
      <form className="space-y-6" onSubmit={handleSubmit} noValidate>
        {/* Section 1: Data Pasien */}
        <section className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />

          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-sm text-primary">person</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-on-surface">1. Data Pasien</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="nama-pasien" className="block text-sm font-medium text-on-surface-variant mb-2">Nama Lengkap Pasien</label>
              <input
                id="nama-pasien"
                value={form.nama}
                onChange={update('nama')}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Masukkan nama lengkap"
                type="text"
                required
              />
            </div>

            <div>
              <label htmlFor="usia-pasien" className="block text-sm font-medium text-on-surface-variant mb-2">Usia</label>
              <input
                id="usia-pasien"
                value={form.usia}
                onChange={update('usia')}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all"
                placeholder="Misal: 8"
                type="number"
                min="0"
                max="120"
                required
              />
            </div>

            <div>
              <label htmlFor="kategori-pasien" className="block text-sm font-medium text-on-surface-variant mb-2">Kategori</label>
              <div className="relative">
                <select
                  id="kategori-pasien"
                  value={form.kategori}
                  onChange={update('kategori')}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none cursor-pointer"
                  required
                >
                  <option value="">Pilih Kategori</option>
                  <option value="bayi">Bayi (0-1 Tahun)</option>
                  <option value="anak">Anak-anak (1-12 Tahun)</option>
                  <option value="dewasa">Dewasa (&gt;12 Tahun)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">arrow_drop_down</span>
              </div>
            </div>

            <div className="col-span-1 md:col-span-2">
              <label htmlFor="alamat-pasien" className="block text-sm font-medium text-on-surface-variant mb-2">Alamat Lengkap</label>
              <textarea
                id="alamat-pasien"
                value={form.alamat}
                onChange={update('alamat')}
                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 px-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder="Masukkan alamat lengkap pasien..."
                rows={3}
                required
              />
            </div>
          </div>
        </section>

        {/* Section 2: Detail Layanan */}
        <section className="bg-surface-container border border-outline-variant rounded-xl p-6 relative overflow-hidden">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-sm text-primary">medical_services</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-on-surface">2. Detail Layanan</h3>
          </div>

          <div className="space-y-6">
            {/* Paket Sunat */}
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Paket Sunat</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { value: 'laser', title: 'Sunat Laser', desc: 'Metode presisi dengan laser, pendarahan minimal, dan pemulihan cepat.' },
                  { value: 'smart-klamp', title: 'Smart Klamp', desc: 'Metode modern tanpa jahitan, perban, dan bisa langsung mandi.' },
                  { value: 'super-ring', title: 'Super Ring', desc: 'Cincin sunat inovatif, proses cepat, minim nyeri dan pendarahan.' },
                ].map((item) => (
                  <label key={item.value} className="relative cursor-pointer group">
                    <input
                      className="peer sr-only"
                      name="paket"
                      type="radio"
                      value={item.value}
                      checked={form.paket === item.value}
                      onChange={update('paket')}
                      required
                    />
                    <div className="h-full bg-surface-container-lowest border border-outline-variant rounded-lg p-4 hover:border-primary-fixed-dim transition-all group-hover:bg-surface-container-highest">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-medium text-on-surface">{item.title}</span>
                        <span className="material-symbols-outlined text-primary opacity-0 radio-icon transition-opacity">check_circle</span>
                      </div>
                      <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Pilihan Obat */}
            <div>
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Pilihan Obat Pasca Tindakan</label>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: 'sirup', label: 'Sirup' },
                  { value: 'tablet', label: 'Tablet' },
                  { value: 'keduanya', label: 'Keduanya' },
                ].map((item) => (
                  <label key={item.value} className="relative cursor-pointer group flex-1 min-w-[140px]">
                    <input
                      className="peer sr-only"
                      name="obat"
                      type="radio"
                      value={item.value}
                      checked={form.obat === item.value}
                      onChange={update('obat')}
                      required
                    />
                    <div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant rounded-lg p-3 hover:border-primary-fixed-dim transition-all">
                      <div className="w-4 h-4 rounded-full border border-outline-variant flex items-center justify-center peer-checked:border-primary">
                        <div className="w-2 h-2 rounded-full bg-primary opacity-0 radio-icon transition-opacity" />
                      </div>
                      <span className="text-sm font-medium text-on-surface">{item.label}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Jadwal & Lokasi */}
        <section className="bg-surface-container border border-outline-variant rounded-xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-sm text-primary">event</span>
            </div>
            <h3 className="text-lg font-semibold tracking-tight text-on-surface">3. Jadwal &amp; Lokasi</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm font-medium text-on-surface-variant mb-3">Tempat Sunat</label>
              <div className="inline-flex bg-surface-container-lowest border border-outline-variant rounded-lg p-1">
                {[
                  { value: 'klinik', label: 'Klinik' },
                  { value: 'rumah', label: 'Kunjungan Rumah' },
                ].map((item) => (
                  <label key={item.value} className="cursor-pointer">
                    <input
                      className="peer sr-only"
                      name="lokasi"
                      type="radio"
                      value={item.value}
                      checked={form.lokasi === item.value}
                      onChange={update('lokasi')}
                    />
                    <div className="px-6 py-2 rounded-md text-sm font-medium text-on-surface-variant peer-checked:bg-surface-container-high peer-checked:text-on-surface peer-checked:shadow-sm transition-all">
                      {item.label}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="tanggal-tindakan" className="block text-sm font-medium text-on-surface-variant mb-2">Tanggal Tindakan</label>
              <div className="relative">
                <input
                  id="tanggal-tindakan"
                  value={form.tanggal}
                  onChange={update('tanggal')}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 pl-10 pr-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all [color-scheme:dark]"
                  type="date"
                  required
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">calendar_today</span>
              </div>
            </div>

            <div>
              <label htmlFor="jam-tindakan" className="block text-sm font-medium text-on-surface-variant mb-2">Jam Tindakan</label>
              <div className="relative">
                <input
                  id="jam-tindakan"
                  value={form.jam}
                  onChange={update('jam')}
                  className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg py-2.5 pl-10 pr-4 text-on-surface focus:ring-2 focus:ring-primary focus:border-primary transition-all [color-scheme:dark]"
                  type="time"
                  required
                />
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm pointer-events-none">schedule</span>
              </div>
            </div>
          </div>
        </section>

        {/* Actions */}
        <div className="flex items-center justify-end gap-4 pt-4 border-t border-outline-variant mt-8">
          <button
            type="reset"
            onClick={() =>
              setForm({
                nama: '',
                usia: '',
                kategori: '',
                alamat: '',
                paket: '',
                obat: '',
                lokasi: 'klinik',
                tanggal: '',
                jam: '',
              })
            }
            className="px-6 py-2.5 rounded-lg border border-outline-variant text-on-surface font-medium text-sm hover:bg-surface-container-highest transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary text-on-primary font-bold text-sm hover:bg-primary-fixed transition-colors shadow-[0_0_15px_rgba(167,139,250,0.15)] focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">save</span>
            Simpan Pemesanan
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormPemesananPage

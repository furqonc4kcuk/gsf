import { useState } from 'react'

function KasirPage() {
  const [receiptOpen, setReceiptOpen] = useState(false)

  return (
    <div className="flex-1 overflow-hidden flex flex-col lg:flex-row">
      <Catalog />
      <CartPane onOpenReceipt={() => setReceiptOpen(true)} />
      {receiptOpen && <ReceiptModal onClose={() => setReceiptOpen(false)} />}
    </div>
  )
}

function Catalog() {
  const categories = ['Semua Layanan', 'Metode', 'Obat-obatan', 'Barang']

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-8">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              cat === 'Semua Layanan'
                ? 'bg-primary text-on-primary-fixed'
                : 'bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <ServiceCard
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuBIgwIuw94Nss1RWjM7ZtabQ5wL-xe0rLVPsqXyzVKMcE015zafPPNbbtD-vZX5ZoBu3XJpbOpv6TEw20n_1AwccrwjQw30Mt41tMSEwvgMUOp2J6iyTBlzg9hCxL0x5LHGS2sX5m--uf8DB2mj3qc-WiGWw2Jgr5QBe3UlCypxQGNxVXttrchEpHHEZgZJnKgjAeYY9xgYMjlm0sAyyXpaT3xnBLvw8CPvFolCXawazwlQKiQ-CRCtEQ"
          title="Khitan Laser"
          desc="Pemotongan presisi dengan pendarahan minimal dan waktu pemulihan lebih cepat."
          tag="Prosedur"
          prices={[
            { label: 'DIAMON', price: 'Rp 1.4M' },
            { label: 'SUPERGOLD', price: 'Rp 1.3M' },
            { label: 'GOLD', price: 'Rp 1.2M' },
          ]}
        />
        <ServiceCard
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuCQujTqCvOsFkX_y6c8vwzb0jKh9cva5Je27BZmtMH5_4A9DRGIn_XhDxz0ytcc8T2bBGXzxZuWs5-lkUVCi4NXDjptsm-WEXcHXRsx6rjLYHdd6EKlMkS8Istm4SoCBxdoJrOdwN6AFTHVSNIvC4DJvGe0CV_Br8QyWjuMkEkhhDd0YQZ96otd_l-MBKWagT2f_DzvDnB-367TL3sVLs4zGeOQUICYxHKgDKy2bOW76UKf28aw9m7tkA"
          title="Metode Smart Klamp"
          desc="Tanpa jahitan, prosedur cepat yang memungkinkan aktivitas normal segera."
          tag="Prosedur"
          prices={[
            { label: 'SUPER BABY', price: 'Rp 1.4M' },
            { label: 'SILVER', price: 'Rp 900' },
            { label: 'BRONZE', price: 'Rp 600' },
          ]}
        />
        <ServiceCard
          icon="water_drop"
          title="Teknologi Tissue Sealer"
          desc="Teknologi penutupan jaringan tanpa bekas luka premium. Penyembuhan tercepat."
          tag="Lanjutan"
          singlePrice="Rp 1.5M"
        />
        <MedicineCard
          image="https://lh3.googleusercontent.com/aida-public/AB6AXuAjYBXLK-75309ljug97y4qBX4PHVIHqkhWe-vrmA12cWr365tU0YrGEvXordOSvzkDCzz_7mEaPosmSRC1VTI3i3iC8IOCc1VFDeWzKwWWd3NDRCLIHj11PgFTKSMr_SG5rsY7NkBHPncuhp4hF9udQgIZnOmulecQ5o9MT3y2nydbqz5vI8US_OWgRNACYWnsdGPtRJzaekZnnhsdTF_-yLno8c-V6K892uE4kICxcqiKUPufqkNY0A"
          title="Paket Medis Pasca-perawatan A"
          desc="Antibiotik, obat pereda nyeri, dan bundel kasa steril."
          stock="42"
          price="Rp 250.000"
        />
      </div>
    </div>
  )
}

function ServiceCard({ image, icon, title, desc, tag, prices, singlePrice }: { image?: string; icon?: string; title: string; desc: string; tag: string; prices?: { label: string; price: string; disabled?: boolean }[]; singlePrice?: string }) {
  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden hover:border-primary/50 transition-colors group flex flex-col">
      <div className="h-32 w-full bg-surface-variant relative">
        {icon ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface-container-lowest" />
            <span className="material-symbols-outlined text-4xl text-on-surface-variant relative z-10">{icon}</span>
          </>
        ) : (
          <img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" data-alt="Product image" src={image} />
        )}
        <div className="absolute top-2 right-2 bg-surface-container-lowest/80 backdrop-blur-sm px-2 py-1 rounded text-xs text-on-surface font-bold border border-outline-variant">
          {tag}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-on-surface font-headline font-bold text-lg leading-tight">{title}</h3>
        <p className="text-on-surface-variant text-xs mt-1 mb-4">{desc}</p>
        {prices ? (
          <div className="mt-auto space-y-2">
            <p className="text-xs text-on-surface-variant uppercase tracking-wider font-semibold">Pilih Tipe Pasien</p>
            <div className="flex gap-2">
              {prices.map((p) => (
                <button
                  key={p.label}
                  disabled={p.disabled}
                  className={`flex-1 bg-surface-container-lowest border rounded py-1.5 transition-colors flex flex-col items-center justify-center ${
                    p.disabled
                      ? 'border-outline-variant text-on-surface-variant opacity-50 cursor-not-allowed'
                      : 'border-outline-variant hover:border-primary text-on-surface'
                  }`}
                >
                  <span className="text-xs">{p.label}</span>
                  <span className={`font-bold text-xs ${p.disabled ? '' : 'text-primary'}`}>{p.price}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-auto flex gap-2">
            <button className="w-full bg-surface-container-lowest border border-outline-variant hover:border-primary hover:text-primary text-on-surface py-2 rounded transition-colors flex items-center justify-between px-4">
              <span className="text-sm font-medium">Tambah ke Keranjang</span>
              <span className="font-bold">{singlePrice}</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function MedicineCard({ image, title, desc, stock, price }: { image: string; title: string; desc: string; stock: string; price: string }) {
  return (
    <div className="bg-surface-container rounded-xl border border-outline-variant overflow-hidden hover:border-primary/50 transition-colors group flex flex-col md:col-span-2 xl:col-span-1">
      <div className="flex h-full">
        <div className="w-24 bg-surface-variant relative flex-shrink-0">
          <img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" data-alt="Medicine image" src={image} />
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start">
              <h3 className="text-on-surface font-headline font-bold text-base leading-tight">{title}</h3>
              <span className="text-xs bg-tertiary-container/30 text-tertiary px-1.5 rounded border border-tertiary-container">Stok: {stock}</span>
            </div>
            <p className="text-on-surface-variant text-xs mt-1">{desc}</p>
          </div>
          <button className="mt-4 bg-surface-container-lowest border border-outline-variant hover:border-primary text-on-surface py-1.5 rounded transition-colors flex items-center justify-center gap-2 text-sm w-full">
            <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
            {price}
          </button>
        </div>
      </div>
    </div>
  )
}

function CartPane({ onOpenReceipt }: { onOpenReceipt: () => void }) {
  const [dpEnabled, setDpEnabled] = useState(false)

  return (
    <div className="w-full lg:w-96 flex-shrink-0 bg-surface-container-lowest border-l border-outline-variant flex flex-col shadow-[-4px_0_24px_rgba(0,0,0,0.5)] lg:shadow-none z-20 h-full">
      <div className="p-4 border-b border-outline-variant bg-surface-container/50">
        <h2 className="text-lg font-headline font-bold text-on-surface flex items-center justify-between">
          Pesanan Saat Ini
          <span className="bg-primary/20 text-primary text-xs px-2 py-0.5 rounded-full border border-primary/30">POS-9942</span>
        </h2>
        <div className="mt-4 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">person_search</span>
          <input
            className="w-full bg-background border border-outline-variant rounded py-1.5 pl-9 pr-4 text-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
            placeholder="Tugaskan Pasien (Opsional)"
            type="text"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <CartItem name="Khitan Laser" meta="Tipe: Anak" price="Rp 1.400.000" />
        <CartItem name="Paket Medis Pasca-perawatan A" meta="Barang Inventaris" price="Rp 250.000" />
      </div>

      <div className="p-4 border-t border-outline-variant bg-surface-container-lowest space-y-4">
        <div className="flex items-center justify-between p-3 rounded bg-surface-container border border-outline-variant">
          <div>
            <p className="text-sm font-medium text-on-surface">Uang Muka (DP)</p>
            <p className="text-xs text-on-surface-variant">Terima pembayaran sebagian terlebih dahulu</p>
          </div>
          <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
            <input
              checked={dpEnabled}
              className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-on-surface border-4 border-surface-container appearance-none cursor-pointer transition-all duration-200 z-10 top-0 left-0"
              id="dp-toggle"
              onChange={(e) => setDpEnabled(e.target.checked)}
              type="checkbox"
            />
            <label
              className={`toggle-label block overflow-hidden h-5 rounded-full cursor-pointer transition-colors duration-200 ${dpEnabled ? 'bg-primary' : 'bg-outline-variant'}`}
              htmlFor="dp-toggle"
            />
          </div>
        </div>

        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between text-on-surface-variant">
            <span>Subtotal</span>
            <span>Rp 1.650.000</span>
          </div>
          <div className="flex justify-between text-on-surface-variant">
            <span>Pajak (11%)</span>
            <span>Rp 225.500</span>
          </div>
          <div className="flex justify-between text-lg font-headline font-bold text-on-surface pt-2 border-t border-outline-variant mt-2">
            <span>Total</span>
            <span className="text-primary">Rp 1.875.500</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <button className="bg-surface-container border border-primary text-primary py-2 rounded flex flex-col items-center justify-center gap-1 hover:bg-surface-container-high transition-colors focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
            <span className="material-symbols-outlined text-lg">qr_code_scanner</span>
            <span className="text-xs font-medium">QRIS</span>
          </button>
          <button className="bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-outline py-2 rounded flex flex-col items-center justify-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-lg">account_balance</span>
            <span className="text-xs font-medium">Transfer</span>
          </button>
          <button className="bg-surface-container border border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-outline py-2 rounded flex flex-col items-center justify-center gap-1 transition-colors">
            <span className="material-symbols-outlined text-lg">payments</span>
            <span className="text-xs font-medium">Tunai</span>
          </button>
        </div>

        <div className="flex gap-2 pt-2">
          <button
            onClick={onOpenReceipt}
            className="px-3 py-2 bg-surface-container border border-outline-variant rounded text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center"
            title="Preview Receipt"
          >
            <span className="material-symbols-outlined">receipt_long</span>
          </button>
          <button className="flex-1 bg-primary text-on-primary-fixed font-bold py-2 rounded hover:bg-primary-fixed-dim transition-colors duration-200 active:scale-95 shadow-[0_0_15px_rgba(167,139,250,0.2)]">
            Proses Pembayaran
          </button>
        </div>
      </div>
    </div>
  )
}

function CartItem({ name, meta, price }: { name: string; meta: string; price: string }) {
  return (
    <div className="group flex gap-3 p-3 rounded-lg bg-surface-container border border-outline-variant hover:border-outline transition-colors relative">
      <div className="flex-1">
        <h4 className="text-sm font-bold text-on-surface">{name}</h4>
        <p className="text-xs text-on-surface-variant">{meta}</p>
        <div className="mt-2 text-primary font-bold text-sm">{price}</div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <button className="text-on-surface-variant hover:text-error transition-colors">
          <span className="material-symbols-outlined text-lg">delete</span>
        </button>
        <div className="flex items-center gap-2 bg-background border border-outline-variant rounded px-1">
          <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">remove</span></button>
          <span className="text-xs text-on-surface font-medium w-4 text-center">1</span>
          <button className="text-on-surface-variant hover:text-primary"><span className="material-symbols-outlined text-sm">add</span></button>
        </div>
      </div>
    </div>
  )
}

function ReceiptModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="hidden fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-2xl max-w-sm w-full flex flex-col overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-outline-variant bg-surface-container text-on-surface">
          <h3 className="font-headline font-bold text-lg">Pratinjau Struk</h3>
          <button className="text-on-surface-variant hover:text-error transition-colors" onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="p-6 font-mono text-sm text-on-surface space-y-4 bg-surface-container-lowest">
          <div className="text-center pb-4 border-b border-outline-variant border-dashed">
            <h2 className="font-bold text-lg tracking-widest uppercase">Obsidian Khitan</h2>
            <p className="text-on-surface-variant text-xs">Pusat Perawatan Presisi</p>
            <p className="text-on-surface-variant text-xs mt-2">Pesanan #POS-9942</p>
            <p className="text-on-surface-variant text-xs">Tanggal: 2023-10-27 14:30</p>
          </div>
          <div className="space-y-2 py-2">
            <div className="flex justify-between">
              <span>1x Khitan Laser. (Anak)</span>
              <span>1.400.000</span>
            </div>
            <div className="flex justify-between">
              <span>1x Paket Medis A</span>
              <span>250.000</span>
            </div>
          </div>
          <div className="border-t border-outline-variant border-dashed pt-4 space-y-1">
            <div className="flex justify-between text-on-surface-variant">
              <span>Subtotal</span>
              <span>1.650.000</span>
            </div>
            <div className="flex justify-between text-on-surface-variant">
              <span>Pajak (11%)</span>
              <span>225.500</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2">
              <span>TOTAL</span>
              <span>1.875.500</span>
            </div>
          </div>
          <div className="text-center pt-4 border-t border-outline-variant border-dashed text-tertiary flex flex-col items-center gap-1">
            <span className="material-symbols-outlined text-3xl">check_circle</span>
            <p className="font-bold">DIBAYAR MELALUI QRIS</p>
          </div>
        </div>
        <div className="p-4 border-t border-outline-variant bg-surface-container flex gap-2">
          <button className="flex-1 bg-surface-container-lowest border border-outline-variant text-on-surface py-2 rounded hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">print</span> Cetak
          </button>
          <button className="flex-1 bg-primary text-on-primary-fixed font-bold py-2 rounded hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-sm">share</span> Bagikan PDF
          </button>
        </div>
      </div>
    </div>
  )
}

export default KasirPage

function NextAppointment() {
  return (
    <div className="col-span-1 lg:col-span-4 bg-primary-container border border-primary/20 rounded-xl p-6 flex flex-col relative overflow-hidden h-full min-h-[160px]">
      <div className="absolute -bottom-10 -right-10 text-primary-fixed-dim/20 pointer-events-none transform -rotate-12">
        <span className="material-symbols-outlined" style={{ fontSize: '140px', fontVariationSettings: "'FILL' 1" }}>
          vaccines
        </span>
      </div>
      <div className="relative z-10 flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <h3 className="font-headline font-bold text-on-primary-container text-sm uppercase tracking-wider">
            Selanjutnya
          </h3>
        </div>
        <h4 className="text-2xl font-headline font-bold text-on-primary-container mb-1">Rizky (10y)</h4>
        <p className="text-on-primary-container/80 text-sm mb-4 font-mono">10:30 AM • Smart Clamp</p>
        <div className="flex items-center gap-2 text-xs text-on-primary-container/90 bg-black/20 self-start px-3 py-1.5 rounded backdrop-blur-sm border border-white/10">
          <span className="material-symbols-outlined text-[14px]">stethoscope</span>
          Ditugaskan ke dr. Hendra
        </div>
      </div>
    </div>
  )
}

export default NextAppointment

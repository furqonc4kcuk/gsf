import { QueueCardMenunggu, QueueCardTindakan, QueueCardSelesai } from '../components/QueueStatus'
import NextAppointment from '../components/NextAppointment'
import ScheduleTable from '../components/ScheduleTable'
import RecentRecords from '../components/RecentRecords'

function HeaderSection() {
  return (
    <div className="flex justify-between items-end">
      <div>
        <h1 className="font-headline text-3xl font-bold tracking-tight text-on-surface">
          Ikhtisar Operasional
        </h1>
        <p className="font-body text-sm text-on-surface-variant mt-1">
          Status real-time untuk prosedur hari ini.
        </p>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-on-surface-variant bg-surface-container px-3 py-1.5 rounded border border-outline-variant">
        <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse" />
        Pembaruan Langsung
      </div>
    </div>
  )
}

function BentoGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-min">
      <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <QueueCardMenunggu />
        <QueueCardTindakan />
        <QueueCardSelesai />
      </div>
      <NextAppointment />
      <ScheduleTable />
      <RecentRecords />
    </div>
  )
}

function OperasionalPage() {
  return (
    <>
      <HeaderSection />
      <BentoGrid />
    </>
  )
}

export default OperasionalPage

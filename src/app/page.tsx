import PeriodicTable from '@/components/PeriodicTable';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pb-16">
      <div className="container mx-auto pt-8 px-4">
        {/* Header Banner */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 py-2">
            The Periodic Table
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            An interactive guide to the chemical elements
          </p>
        </div>
        
        {/* Main Content */}
        <PeriodicTable />
      </div>
    </main>
  )
}

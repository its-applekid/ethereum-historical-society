import { EthSupplyChart } from '../components/EthSupplyChart'
import { L2TransactionCrossing } from '../components/L2TransactionCrossing'

export function MetricsPage() {
  return (
    <main className="min-h-screen py-12 px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Ethereum Metrics
          </h1>
          <p className="text-xl text-[var(--text-secondary)]">
            Economic and scaling metrics that tell Ethereum's story
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-6">💰 Economic Narrative</h2>
          <EthSupplyChart />
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">📈 Scaling Success</h2>
          <L2TransactionCrossing />
        </section>
      </div>
    </main>
  )
}

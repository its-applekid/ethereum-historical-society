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

        <section className="bg-[var(--bg-secondary)] rounded-lg p-6 border border-[var(--bg-tertiary)]">
          <h3 className="text-lg font-medium mb-4">More Metrics Coming Soon</h3>
          <ul className="text-[var(--text-muted)] space-y-2">
            <li>• DeFi TVL "Water Level" visualization</li>
            <li>• Validator growth chart (21k → 1M+)</li>
            <li>• Client diversity evolution</li>
            <li>• Gas limit growth band</li>
            <li>• Censorship resistance tracking</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

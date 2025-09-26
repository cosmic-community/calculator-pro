import Calculator from '@/components/Calculator'
import { Calculator as CalculatorIcon } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <CalculatorIcon className="w-8 h-8 text-blue-400" />
            <h1 className="text-4xl font-bold text-white">Calculator Pro</h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional calculator with clean interface, full keyboard support, and all essential arithmetic operations.
          </p>
        </div>

        {/* Calculator */}
        <div className="flex justify-center">
          <Calculator />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">Basic Operations</h3>
            <p className="text-gray-400">
              Addition, subtraction, multiplication, and division with decimal support.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">Keyboard Support</h3>
            <p className="text-gray-400">
              Full keyboard input support for enhanced productivity and accessibility.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-3">Responsive Design</h3>
            <p className="text-gray-400">
              Optimized for desktop, tablet, and mobile devices with touch-friendly buttons.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
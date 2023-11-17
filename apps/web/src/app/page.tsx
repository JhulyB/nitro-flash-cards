import { ProgressCircle } from '@/components/progress-circle'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-t from-marine-600 to-marine-500 px-6 py-5 flex flex-col gap-8">
        <img
          src="https://github.com/jhulyb.png"
          alt=""
          className="rounded-full h-16 w-16 self-end"
        />
        <span className="text-2xl text-mirage-50 font-bold leading-heading">
          Dashboard
        </span>
      </div>

      <main className="p-6 flex flex-col gap-4">
        <span className="text-lg font-bold leading-heading">Coleções</span>

        <div className="flex flex-col gap-5 py-6 px-5 rounded-lg border border-mirage-100 shadow-lg">
          <span className="font-bold text-sm text-mirage-600 leading-heading">
            JAVASCRIPT
          </span>
          <div className="space-y-2">
            <h2 className="font-bold leading-heading">
              Fundamentos do javaScript
            </h2>
            <p className="text-smoke-800 text-sm leading-base">
              Treine seus conhecimentos nos fundamentos do JavaScript com Array,
              variáveis, condicionais e estruturas de repetição.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="py-3 px-5 flex items-center gap-3 text-sm font-bold bg-marine-500 text-mirage-50 rounded-md"
            >
              Acessar coleção <MoveRight className="h-5 w-5" />
            </a>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6">
                <ProgressCircle progress={400} />
              </div>
              <span className="text-smoke-600 text-sm leading-base"> 8/16</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative py-20 overflow-hidden bg-gray-900 sm:py-28"
    >
      <div className="absolute -translate-y-1/2 left-20 top-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="max-w-md mx-auto sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Agenda tus primeras citas de inmediato
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Sólo demora 30 segundos tener tu espacio. Entra en la aplicación y
            crea tu cuenta hoy.
          </p>
          <div className="flex justify-center mt-8">
            <Button href="http://app.makeapp.ar/" variant="outline" className="text-white transition-all duration-200 ease-in-out hover:text-gray-400 hover:scale-110">
              Ingresar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

import { useId } from 'react'

import { Container } from '@/components/Container'
import CalendarIcon from './Icons/CalendarIcon'
import WorldIcon from './Icons/WorldIcon'
import ShareIcon from './Icons/ShareIcon'
import ShieldIcon from './Icons/ShieldIcon'
import SheetsIcon from './Icons/SheetsIcon'
import UpdateIcon from './Icons/UpdateIcon'

const features = [
  {
    name: 'Sincronización con Google Calendar',
    description:
      'Tus citas se sincronizan con Google Calendar de forma que recibes notificaciones en tu celular.',
    icon: () => <CalendarIcon className="w-8 h-8 text-gray-600" />,
  },
  {
    name: 'Disponible en cualquier dispositivo',
    description:
      'Accede a tu agenda desde cualquier dispositivo con conexión a internet.',
    icon: () => <WorldIcon className="w-8 h-8 text-gray-600" />,
  },
  {
    name: 'Recordatorios para tus clientes',
    description:
      'Envía recordatorios a tus clientes para que no olviden su cita.',
    icon: () => <ShareIcon className="w-8 h-8 text-gray-600" />,
  },
  {
    name: 'Seguridad y privacidad',
    description:
      'Tus datos están seguros y protegidos con nosotros. Todo se almacenará en tu cuenta de Google.',
    icon: () => <ShieldIcon className="w-8 h-8 text-gray-600" />,
  },
  {
    name: 'Sincronización con Google Sheets',
    description:
      'Todos tus ingresos se sincronizan con Google Sheets de forma que puedes llevar un registro eficiente.',
    icon: () => <SheetsIcon className="w-8 h-8 text-gray-600" />,
  },
  {
    name: 'Actualización constante',
    description:
      'Siempre estamos trabajando para mejorar tu experiencia con MakeApp.',
    icon: () => <UpdateIcon className="w-8 h-8 text-gray-600" />,
  },
]


export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            Es momento que comiences a disfrutar de tu tiempo.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Resalta la belleza de tus clientes y ahorra tiempo con nuestra aplicación de turnos en línea.
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="p-8 border border-gray-200 rounded-2xl"
            >
              <feature.icon className="w-8 h-8" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: '¿Cuál es el precio de MakeApp?',
      answer:
        'MakeApp es gratis por ahora. En el futuro, habrá una versión premium con más funciones.',
    },
    {
      question: '¿Es seguro MakeApp?',
      answer:
        'Si. MakeApp utiliza Google Calendar y Google Sheets para almacenar tus datos. Google es una de las empresas más seguras del mundo.',
    },
    {
      question: '¿Cómo puedo comenzar a usar MakeApp?',
      answer:
        'Simplemente ingresa a la aplicación y crea tu cuenta. Luego, puedes comenzar a crear citas.',
    },
  ],
  [
    {
      question: '¿Qué hago si tengo un problema?',
      answer:
        'Si tienes algún problema, comunícate con nosotros a través de nuestro correo electrónico.',
    },
    {
      question: '¿Cómo puedo sincronizar mis citas con Google Calendar?',
      answer:
        'MakeApp se sincroniza automáticamente con Google Calendar. No tienes que hacer nada.',
    },
    {
      question: '¿Cómo puedo sincronizar mis ingresos con Google Sheets?',
      answer:
        'MakeApp se sincroniza automáticamente con Google Sheets. No tienes que hacer nada.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="py-20 border-t border-gray-200 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Si tienes alguna inquietud,{' '}
            <Link
              href="mailto:facundocapua@gmail.com"
              className="text-gray-900 underline"
            >
              comunícate con nosotros
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 sm:mt-20 lg:max-w-none lg:grid-cols-2"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

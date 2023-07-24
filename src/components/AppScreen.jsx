import { forwardRef } from 'react'
import clsx from 'clsx'
import { Logomark } from './Logo'
import ClockIcon from './Icons/ClockIcon'
import CloseIcon from './Icons/CloseIcon'
import EditIcon from './Icons/EditIcon'
import ShareIcon from './Icons/ShareIcon'
import CalendarIcon from './Icons/CalendarIcon'

function Logo(props) {
  return (
    <div className="flex items-center justify-center gap-4">
      <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
        <Logomark width="40" height="40" className="text-white fill-white" />
      </svg>
      <h1 className="flex-grow text-white">MakeApp</h1>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col relative', className)} {...props}>
      {children}
    </div>
  )
}

AppScreen.Header = forwardRef(function AppScreenHeader({ }, ref) {
  return (
    <div className="flex justify-center px-4 pt-4" ref={ref}>
      {/* <MenuIcon className="flex-none w-6 h-6" /> */}
      <Logo className="flex-none h-6" />
      {/* <UserIcon className="flex-none w-6 h-6" /> */}
    </div>
  )
})

AppScreen.Title = forwardRef(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
    >
      {children}
    </div>
  )
})

AppScreen.List = forwardRef(function AppScreenList({}, ref){
  return(
    <div ref={ref}>
      <section className='mx-4 mt-10'>
          <div className='mb-4'>
            <h2 className="text-xl font-bold text-gray-100">viernes, 14 oct</h2>
            <ul>
              <li>
                <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg opacity-50 cursor-pointer drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>15:00</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Fernanda</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch mt-2 bg-gray-500 rounded-lg opacity-50 cursor-pointer h-14 drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>15:30</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Lola</h3> <small className='ml-1 text-xs text-gray-200'>(45 mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch mt-2 bg-gray-500 rounded-lg cursor-pointer h-14 drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>16:15</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Camila</h3> <small className='ml-1 text-xs text-gray-200'>(45 mins)</small>
                  </div>
                </article>
              </li>
            </ul>
          </div>
      </section>
      <section className='mx-4 mt-10'>
        <div className='mb-4'>
          <h2 className="text-xl font-bold text-gray-100">sábado, 15 oct</h2>
          <ul>
            <li>
              <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                  <ClockIcon className='w-3 h-3' />
                  <small>14:00</small>
                </div>
                <div className='flex items-center p-2'>
                  <h3 className='text-gray-100'>Rocio</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                </div>
              </article>
            </li>
            <li>
              <article className="flex items-stretch h-20 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                  <ClockIcon className='w-3 h-3' />
                  <small>14:30</small>
                </div>
                <div className='flex items-center p-2'>
                  <h3 className='text-gray-100'>Jimena</h3> <small className='ml-1 text-xs text-gray-200'>(60 mins)</small>
                </div>
              </article>
            </li>
            <li>
              <article className="flex items-stretch h-20 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                  <ClockIcon className='w-3 h-3' />
                  <small>15:30</small>
                </div>
                <div className='flex items-center p-2'>
                  <h3 className='text-gray-100'>Paola</h3> <small className='ml-1 text-xs text-gray-200'>(60 mins)</small>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
   </div>
  )
})

AppScreen.Modal = forwardRef(function AppScreenModal({ children }, ref) {
  return (
    <>
      <div className='fixed top-0 bottom-0 left-0 right-0 z-10 bg-white opacity-50'></div>
      <div ref={ref} className='fixed z-20 max-w-lg p-4 mx-auto bg-gray-700 rounded-lg shadow-md left-4 right-4 top-1/3 shadow-gray-400/40'>
        {children}
      </div>
    </>
  )
})

AppScreen.EventDetails = forwardRef(function AppScreenEventDetails({}, ref) {
  return (
    <div className='w-11/12 max-w-lg p-4 mx-auto mt-16 bg-gray-700 rounded-lg shadow-md shadow-gray-400/40'>
      <button className='absolute p-2 text-white bg-gray-500 rounded-full right-1 top-12'><CloseIcon className='w-4 h-4' /></button>
      <h1 className="flex items-center py-1 mb-2 text-2xl font-bold text-gray-100">
        Lola
        <EditIcon className='w-4 h-4 ml-1 text-gray-400' />
      </h1>
      <div className='flex items-center text-gray-200'>
        ¿Cuándo?
        <div className='flex items-center'>
          <p className="ml-2 text-sm">viernes, 14 oct, 15:30</p>
          <EditIcon className='w-3 h-3 ml-1 text-gray-400' />
        </div>
      </div>

      <div className='my-4'>
        <div className='flex flex-col text-gray-100'>
          <div className='flex items-center text-lg'>
            Precio:
            <p className='flex items-center px-2'>
              $10.000
              <EditIcon className='w-4 h-4 ml-1 text-gray-400' />
            </p>
          </div>
          <small>(Restan: $4,000)</small>
        </div>
        <div className='flex items-center text-lg text-gray-100'>
          Abonado:
          <p className='flex items-center p-2'>
            $6.000
            <EditIcon className='w-4 h-4 ml-1 text-gray-400' />
          </p>          
        </div>
      </div>

      <div className='my-4'>
        <div className="flex items-center w-full py-1 mb-2 text-sm text-gray-100 md:w-5/6">
          <span className='w-11/12 whitespace-pre-line'>
            Un maquillaje completo con pestañas postizas.
          </span>
          <EditIcon className='w-4 h-4 ml-1 text-gray-400' />
        </div>
      </div>

      <div>
        <button>
          <ShareIcon className='w-6 h-6 text-gray-300 opacity-70 hover:opacity-100' />
        </button>
      </div>
    </div>
  )
})

AppScreen.Archive = forwardRef(function AppScreenArchive({}, ref){
  return(
    <div ref={ref} className='opacity-50'>
      <section className='mx-4 mt-10'>
          <div className='mb-4'>
            <h2 className="text-xl font-bold text-gray-100">viernes, 09 jul</h2>
            <ul>
              <li>
                <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>15:00</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Mariana</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>15:30</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Yanina</h3> <small className='ml-1 text-xs text-gray-200'>(30m mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>16:00</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Julia</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>16:30</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Camila</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                  </div>
                </article>
              </li>
            </ul>
          </div>
      </section>
      <section className='mx-4 mt-10'>
          <div className='mb-4'>
            <h2 className="text-xl font-bold text-gray-100">sábado, 10 jul</h2>
            <ul>
              <li>
                <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>15:00</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Verónica</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch mt-2 bg-gray-500 rounded-lg cursor-pointer h-14 drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>15:30</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Ana</h3> <small className='ml-1 text-xs text-gray-200'>(45 mins)</small>
                  </div>
                </article>
              </li>
              <li>
                <article className="flex items-stretch mt-2 bg-gray-500 rounded-lg cursor-pointer h-14 drop-shadow-xs shadow-white-200 grow">
                  <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                    <ClockIcon className='w-3 h-3' />
                    <small>16:15</small>
                  </div>
                  <div className='flex items-center p-2'>
                    <h3 className='text-gray-100'>Rosario</h3> <small className='ml-1 text-xs text-gray-200'>(45 mins)</small>
                  </div>
                </article>
              </li>
            </ul>
          </div>
      </section>
      <section className='mx-4 mt-10'>
        <div className='mb-4'>
          <h2 className="text-xl font-bold text-gray-100">viernes, 16 jul</h2>
          <ul>
            <li>
              <article className="flex items-stretch h-10 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                  <ClockIcon className='w-3 h-3' />
                  <small>14:00</small>
                </div>
                <div className='flex items-center p-2'>
                  <h3 className='text-gray-100'>Carla</h3> <small className='ml-1 text-xs text-gray-200'>(30 mins)</small>
                </div>
              </article>
            </li>
            <li>
              <article className="flex items-stretch h-20 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                  <ClockIcon className='w-3 h-3' />
                  <small>14:30</small>
                </div>
                <div className='flex items-center p-2'>
                  <h3 className='text-gray-100'>Mercedes</h3> <small className='ml-1 text-xs text-gray-200'>(60 mins)</small>
                </div>
              </article>
            </li>
            <li>
              <article className="flex items-stretch h-20 mt-2 bg-gray-500 rounded-lg cursor-pointer drop-shadow-xs shadow-white-200 grow">
                <div className='flex items-center gap-1 px-4 text-lg text-gray-200 bg-gray-600 rounded-l-lg'>
                  <ClockIcon className='w-3 h-3' />
                  <small>15:30</small>
                </div>
                <div className='flex items-center p-2'>
                  <h3 className='text-gray-100'>Marina</h3> <small className='ml-1 text-xs text-gray-200'>(60 mins)</small>
                </div>
              </article>
            </li>
          </ul>
        </div>
      </section>
   </div>
  )
})

AppScreen.PaymentForm = forwardRef(function AppScreenPaymentForm({}, ref) {
  const PAYMENT_METHODS = ['Efectivo', 'Cuenta DNI', 'Transferencia', 'Mercado Pago']
  const SERVICES = ['Maquillaje', 'Curso', 'Cejas']
  
  return (
    <div className='flex flex-col content-center justify-center p-2 mx-4 mt-4 bg-gray-600 rounded-lg'>
      <h1 className='mb-4 text-xl text-center text-white'>Registrar pago</h1>
       
      <label className="px-2 text-sm text-gray-200">Fecha</label>
      <div className='relative p-1 mx-2 mt-2 mb-4 bg-white rounded-lg w-50'>
        <input
          className="w-32 text-sm border-none outline-none"
          defaultValue='2021-10-14'
          type='date'
        />
        <CalendarIcon className='custom-calendar-icon absolute w-5 h-5 text-gray-600 top-[12px] left-[105px] pointer-events-none' />
      </div>

      <label className="px-2 text-sm text-gray-200">Forma de pago</label>
      <select className='p-2 mx-2 mt-2 mb-4 text-sm rounded-lg outline-none focus:ring focus:ring-gray-400'>
        { PAYMENT_METHODS.map((option) => (
          <option key={option} value={option}>{option}</option>
        )) }
      </select>

      <label className="px-2 text-sm text-gray-200">Descripción</label>
      <input
        className="p-1 mx-2 mt-2 mb-4 rounded-lg outline-none focus:ring focus:ring-gray-400"
        placeholder="Descripción"
        type="text"
      />

      <label className="px-2 text-sm text-gray-200">Monto</label>
      <input
        className="p-1 mx-2 mt-2 mb-4 rounded-lg outline-none focus:ring focus:ring-gray-400"
        placeholder="Monto"
        type="number"
        defaultValue={0}
      />

      <label className="px-2 text-sm text-gray-200">Servicio</label>
      <select className='p-2 mx-2 mt-2 mb-4 text-sm rounded-lg outline-none focus:ring focus:ring-gray-400'>
        { SERVICES.map((option) => (
          <option key={option} value={option}>{option}</option>
        )) }
      </select>

      <button className='p-2 mx-2 text-gray-100 bg-gray-700 border-2 border-gray-400 rounded-xl hover:bg-gray-300 hover:text-gray-700'>Guardar</button>
    </div>
  )
})
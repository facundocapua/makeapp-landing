import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>MakeApp - Tu tiempo vale su belleza: Gestiona citas y deslumbra clientas.</title>
        <meta
          name="description"
          content="Tu agenda de glamour: Gestiona tus citas de maquillaje sin complicaciones."
        />
      </Head>
      <Hero />
      <PrimaryFeatures />
      <SecondaryFeatures />
      <CallToAction />
      {/* <Reviews /> */}
      {/* <Pricing /> */}
      <Faqs />
    </>
  )
}

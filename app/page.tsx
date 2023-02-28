import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Image className='obals'
        src='/drw_dev.png'
        width={120}
        height={120}
        alt='drw'
      />
      <h1 className={inter.className}>Labas! Ką veiki?</h1>
    </main>
  )
}

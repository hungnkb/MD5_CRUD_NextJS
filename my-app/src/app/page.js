import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import stylesBootstrap from './page.css'
import NavbarHeader from './components/header/navbar.header'
import TableUser from './components/user/table/table.user'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main>
          <NavbarHeader />
          <TableUser />
      </main>
    </>
  )
}

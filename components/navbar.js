import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  const drName = process.env.NEXT_PUBLIC_DR_NAME
  return (
    <nav className={styles.navbar}>
      <Image src="/images/tooth.svg" height={30} width={30} alt="logo" />
      {`${drName}`}
    </nav>
  )
}

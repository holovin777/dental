import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Image src="/images/tooth.svg" height={30} width={30} />
        Dental
      </div>
    </nav>
  )
}

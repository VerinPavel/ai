import React from 'react'
import styles from './Footer.module.scss'

export const Footer=() => {
  return (
    <footer className={styles.footer}>
        <div className={styles.emailLink}>
            <a href="mailto:info@not-alone.ai">Send e-mail to support:info@not-alone.ai</a>
        </div>
        <div className={styles.footerInfo}>
            <h4 className={styles.f4}>Company: NotAlone AI LLC</h4>
            <h4 className={styles.f4}>Street: 16192 Coastal Highway</h4>
            <h4 className={styles.f4}>City: Lewes</h4>
            <h4 className={styles.f4}>Postcode: 19958</h4>
        </div>
    </footer>
  )
}

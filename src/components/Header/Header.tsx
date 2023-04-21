import React from 'react'
import styles from '../Header/Header.module.css'

interface HeaderProps {
    todoCount: number;
}

const Header: React.FC<HeaderProps> = ({todoCount}) => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
            Todo list has <b>{todoCount}</b> task(s)
        </div>
    </div>
  )
}

export default Header
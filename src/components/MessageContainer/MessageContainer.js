import styles from './message-container.module.css'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

const MessageContainer = () => {
  const message = useSelector((state) => state.message)

  return <div className={styles.msgContainer}>{message.message}</div>
}

export default MessageContainer

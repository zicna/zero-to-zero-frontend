import { useState, useEffect, useRef } from 'react'
import styles from '../components/Auth/auth.module.css'

export const useValidator = (validator) => {
  const inputRef = useRef('')
  const [inputTouched, setInputTouched] = useState(false)
  const [input, setInput] = useState('')

  const inputBlurHandler = () => {
    setInputTouched(true)
  }

  const inputChangeHandler = (event) => {
    setInput(event.target.value)
  }

  useEffect(() => {
      if (inputTouched && !validator(inputRef.current)) {
      inputRef.current.classList.add(styles.invalid)
    } else {
      if (inputRef.current !== '') {
        inputRef.current.classList.remove(styles.invalid)
      }
    }
  }, [inputTouched, input])

  return {
    input,
    setInput,
    inputRef,
    inputBlurHandler,
    inputChangeHandler,
  }
}

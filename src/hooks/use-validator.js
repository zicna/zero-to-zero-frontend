import { useState, useEffect, useRef } from 'react'
import styles from '../components/Auth/auth.module.css'

export const useValidator = (validator) => {
  const inputRef = useRef('')
  const [inputTouched, setInputTouched] = useState(false)
  const [input, setInput] = useState('')
  const [inputValid, setInputValid] = useState(false)

  const inputBlurHandler = () => {
    setInputTouched(true)
  }

  const inputChangeHandler = (event) => {
    setInput(event.target.value)
    // ! input touched should been set to true as soon as input is changed...
    // setInputTouched(true)
  }

  useEffect(() => {
    if (validator(inputRef.current)) {
      console.log('passed validator')
      setInputValid(true)
      inputRef.current.classList.remove(styles.invalid)
    }
    if (inputTouched && !validator(inputRef.current)) {
      inputRef.current.classList.add(styles.invalid)
    }
  }, [inputTouched, input])

  const inputReset = () => {
    setInputValid(false)
    setInput("")
    setInputTouched(false)
  }

  return {
    input,
    inputValid,
    setInput,
    inputRef,
    inputBlurHandler,
    inputChangeHandler,
    inputReset
  }
}

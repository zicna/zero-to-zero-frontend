import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const PageNotFound = () => {
  const navigator = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigator('/home', { replace: true })
    }, 2000)
  }, [])
  return <div>Page Not Found</div>
}

export default PageNotFound

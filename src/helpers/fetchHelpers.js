export const URL = 'http//localhost:3000'
export const SIGNUP = 'signup'
export const LOGIN = 'login'

export const submitUser = async (user, action) => {
  try {
    console.log(user)
    // !1. typo on URL=> fetch was sending request to app server with added URL passed to fetch
    // ! POST http://localhost:3001/http//localhost:3000/login 404 (Not Found)
    const response = await fetch(`http://localhost:3000/${action}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      throw Error('something went wrong...')
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

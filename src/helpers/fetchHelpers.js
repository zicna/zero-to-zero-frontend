export const URL = 'http//:localhost:3000'
export const SIGNUP = 'signup'
export const LOGIN = 'login'

export const submitUser = async (user, action) => {
  try {
    console.log(user)
    const response = await fetch(`${URL}/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!response.ok) {
      throw Error('something when wrong...')
    }

    const data = await response.then()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}

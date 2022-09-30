export const URL = 'http://localhost:3000'
export const SIGNUP = 'signup'
export const LOGIN = 'login'

export const submitUser = async (user, action) => {
  try {
    const response = await fetch(`${URL}/${action}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    if (!response.ok) throw Error('unauthorized request')

    return await response.json()
  } catch (error) {
    return error
  }
}

// * adding timer to test UI changes
// console.log('start timer')
// await new Promise((resolve) => setTimeout(resolve, 3000))
// console.log('after 1 second')

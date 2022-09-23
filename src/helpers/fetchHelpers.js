export const URL = 'http//localhost:3000'
// export const SIGNUP = 'signup'
// export const LOGIN = 'login'

export const submitUser = async (user, action) => {
  // debugger
  try {
    console.log(user)
    const response = await fetch('http//localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })

    console.log(response)

    if (!response.ok) {
      throw Error('something went wrong...')
    }

    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error.message)
  }
}


{
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(userObject),
}

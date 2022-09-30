const logOutURL = 'http://localhost:3000/logout'

export const logOutUser = async (token) => {
  try {
    console.log('logout user')
    const response = await fetch(logOutURL, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
    //   * guard clause
    if (!response.ok) throw new Error('unauthorized request')

    return await response.json()
  } catch (error) {
    return error
  }
}

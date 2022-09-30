const logOutURL = 'http//localhost:3000/logout'

export const logOutUser = (token) => {
  console.log('logout user')
  fetch(logOutURL, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

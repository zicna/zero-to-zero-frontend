// export const passwordValidator = (node) => {
//   if (node.value.trim() === '') return false
//   return true
// }
export const passwordValidator = (node) =>
  node.value.trim().length < 6  ? false : true

export const emailValidator = (node) =>
  !node.value.includes('@') ? false : true

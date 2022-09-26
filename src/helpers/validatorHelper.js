// export const passwordValidator = (node) => {
//   if (node.value.trim() === '') return false
//   return true
// }
export const passwordValidator = (node) =>
  node.value.trim() === '' ? false : true

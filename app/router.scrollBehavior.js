export default function (to, from, savedPosition) {
  console.log('this is the hash', to.hash)
  return new Promise((resolve, reject) => {
    if (to.hash) {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          offset: { x: 0, y: 15 },
          behavior: 'smooth'
        })
      }, 10)
    } else {
      setTimeout(() => {
        resolve({
          x: 0,
          y: 0,
          behavior: 'smooth'
        })
      }, 10)
    }
  })
}

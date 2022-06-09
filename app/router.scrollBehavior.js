export default function (to, from, savedPosition) {
  return new Promise((resolve, reject) => {
    if (to.hash) {
      setTimeout(() => {
        resolve({
          selector: to.hash,
          behavior: 'smooth'
        })
      }, 20)
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

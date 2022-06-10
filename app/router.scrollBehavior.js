export default async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  }
  const findEl = async (hash, x) => {
    return document.querySelector(hash) ||
      new Promise((resolve, reject) => {
        if (x > 50) {
          return resolve()
        }
        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
      })
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
  return new Promise((resolve, reject) => {
    if (to.hash) {
      return findEl(to.hash).then((el) => {
        resolve(setTimeout(() => window.scrollTo({ top: el.getBoundingClientRect().top, behavior: 'smooth' }), 500))
      })
    } else {
      resolve(window.scrollTo({ top: 0, behavior: 'smooth' }))
    }
  })
}

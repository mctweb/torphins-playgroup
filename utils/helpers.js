// Replace all static folder to base
export const replaceAll = function (object, original, replacement) {
  const regExp = new RegExp(original, 'g')
  return JSON.parse(JSON.stringify(object).replace(regExp, replacement))
}

export const normalizeLinks = function (links, location) {
  return links.map((x) => {
    const to = x[location].toLowerCase()
    return {
      ...x,
      [location]: to === 'homepage' ? '/' : to
    }
  })
}

export const icons = [
  'avatars/avatar-1.svg',
  'avatars/avatar-2.svg',
  'avatars/avatar-3.svg',
  'avatars/avatar-4.svg',
  'avatars/avatar-5.svg',
  'avatars/avatar-6.svg',
  'avatars/avatar-7.svg',
  'avatars/avatar-8.svg'
]

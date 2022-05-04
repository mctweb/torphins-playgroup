// Replace all static folder to base
export const replaceAll = function (object, original, replacement) {
  const regExp = new RegExp(original, 'g')
  return JSON.parse(JSON.stringify(object).replace(regExp, replacement))
}

export const normalizeLinks = function (links, location) {
  return links.map((x) => {
    if (!x[location]) { return x }
    const to = x[location].replace(/\s+/g, '-').toLowerCase()
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

export const slugify = function (text) {
  return text.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '')
}

export const createId = function (title) {
  if (!title) { return }
  const id = title.replaceAll('*', '')
  return id
}

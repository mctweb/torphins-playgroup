/**
  * Replaces all occurrences of needle (interpreted as a regular expression with replacement and returns the new object.
  *
  * @param entity The object on which the replacements should be applied to
  * @param needle The search phrase (as a regular expression)
  * @param replacement Replacement value
  * @param affectsKeys[optional=true] Whether keys should be replaced
  * @param affectsValues[optional=true] Whether values should be replaced
  */
export const replaceAll = function (object, original, replacement) {
  const regExp = new RegExp(original, 'g')
  return JSON.parse(JSON.stringify(object).replace(regExp, replacement))
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

const type = 'website'
const url = 'https://www.torphinsplaygroup.co.uk'
const name = 'Torphins Playgroup Preschool'
const shortName = 'Torphins Playgroup'
const color = '#D41217'
const title = 'Learning Through Play'
const description = 'A fun, warm, inclusive preschool playgroup setting in Aberdeenshire'
const mainImage = 'Torphins-Playgroup.svg'
const keywords = 'Torphins Playgroup, Preschool, Aberdeenshire Childcare, Early Years Education Aberdeenshire, Outdoor preschool Aberdeenshire'

export const sitePWA = {
  meta: {
    name,
    description,
    theme_color: color
  },
  manifest: {
    name,
    description,
    short_name: shortName,
    background_color: '#fff',
    lang: 'en',
    useWebmanifestExtension: false
  }
}
const getSiteMeta = (meta, additional) => {
  const finalurl = meta && meta.url ? url + meta.url : url
  return {
    title: (meta && meta.title) || title,
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: finalurl
      },
      {
        rel: 'preconnect',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: true
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preload',
        as: 'style',
        onload: "this.onload=null;this.rel='stylesheet'",
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'keywords',
        name: 'keywords',
        content: (meta && meta.keywords) || keywords
      },
      {
        hid: 'description',
        name: 'description',
        content: (meta && meta.description) || description
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: (meta && meta.type) || type
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: finalurl
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: (meta && meta.title) || title
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: (meta && meta.description) || description
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: meta && meta.image ? url + meta.image : mainImage
      }
    ],
    ...additional
  }
}

export default getSiteMeta

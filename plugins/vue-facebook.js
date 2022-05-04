window.fbAsyncInit = function () {
  // eslint-disable-next-line no-undef
  FB.init({
    appId: process.env.FACEBOOK_API_ID,
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v13.0'
  })
}

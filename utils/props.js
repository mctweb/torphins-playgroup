const props = {
  title: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  buttons: {
    type: Array,
    default: () => []
  }
}

export default props

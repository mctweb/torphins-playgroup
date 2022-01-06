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
  },
  icon: {
    type: String,
    default: ''
  },
  right: {
    type: Boolean,
    default: false
  }
}

export default props

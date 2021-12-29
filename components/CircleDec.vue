<template>
  <div class="circle-box" :style="box" />
</template>

<script>
function getRndInteger (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default {
  props: {
    color: {
      type: String,
      default: 'red'
    },
    min: {
      type: Number,
      default: 100
    },
    max: {
      type: Number,
      default: 400
    },
    stripes: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    box () {
      const height = getRndInteger(this.min, this.max)
      let plusOrMinus = ['+', '-'][Math.random() * 2 | 0]
      if (this.top) { plusOrMinus = '-' }

      const options = ['left', 'right']
      let chosenOption = getRndInteger(0, 1)
      if (this.left) {
        chosenOption = 1
      }
      if (this.right) {
        chosenOption = 0
      }
      const colors = {
        red: '#D41217',
        blue: '#005CAA'
      }

      const color = colors[this.color] || colors.red

      let background = {}
      if (this.stripes) {
        background = {
          'background-image': `linear-gradient(0deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`,
          'background-size': '20.00px 20.00px'
        }
      } else {
        background = {
          'background-color': color
        }
      }

      return {
        height: height + 'px',
        width: height + 'px',
        top: `calc(0% ${plusOrMinus} ${height / 3}px)`,
        [options[chosenOption]]: `calc(0% + ${height / 1.2}px)`,
        ...background
      }
    }
  }
}
</script>

<style scoped>
.circle-box {
  z-index: 0;
  zoom: 0.5;
  position: absolute;
  transform-origin: center center;
  /* background-image: url(/img/noise.png);
    background-blend-mode: overlay; */
  opacity: 0.85;
  width: 100%;
  border-radius: 50%;
  /* transform: translateX(20%) translateY(-50%) scale(0); */
  animation: createBox 50s;
  transition: background-color 0.25s cubic-bezier(0.895, 0.03, 0.685, 0.22) 0.1s,
    transform 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    border-radius 0.25s cubic-bezier(0.39, 0.575, 0.565, 1) 0.1s;
}
@screen md{
  .circle-box{
    zoom: 0.8;
  }
}
@screen lg{
  .circle-box{
    zoom: 1;
  }
}
@keyframes createBox {
  0%{
    transform: scale(0);
  }
  5%{
    transform: scale(1);
  }
  100%{
    transform: scale(1.2)
  }
}
</style>

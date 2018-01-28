<template>
  <div id="app">
    <h2>o hai doggie</h2>
    <div>
      <Progressb />
    </div>
  </div>
</template>

<script>
import Progressb from './components/Progressb.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Progressb
  }
}
</script>

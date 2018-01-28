<template>
    <progress-bar type="line" ref="line" :options="options"></progress-bar>
</template>

<script>
import Vue from 'vue'
import VueProgress from 'vue-progress'
import GetTimeService from '@/services/GetTimeService'
Vue.use(VueProgress)

 export default {
    data: function () {
      return {
        options: {
          color: '#db697a',
          strokeWidth: 3.0,
          trailWidth: 3.0,
          text: {
            //value: this.setPercent(),
            className: 'progressbar__label',
            style: {
              color: '#000',
              position: 'absolute',
              left: '50%',
              top: '50%',
              padding: 0,
              margin: 0,
              transform: {
                  prefix: true,
                  value: 'translate(-50%, -50%)'
              }
            }
          }
        },
        progressb : 0.5
      }
    },
    methods: {
        async calcDate() {
          let response = await GetTimeService.setTime() 
          let time =  response['data']['time']
          console.log(time);
          return time
        },
        async setProg() {
          this.progressb = await this.calcDate()
        },
        setPercent() {
          return Math.floor(this.calcDate() * 100) + '%'
        }
    },
    async created() {
      await this.setProg()
      this.$refs.line.animate(this.progressb)
      console.log(this.progressb);
      
    },
    mounted: function () {
      //this.$refs.line.animate(this.progressb)
    }
  }

</script>

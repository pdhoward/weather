<template>
  <div id="app">
    <p>This component’s code is in {{ filename }}</p>
    <Content v-bind:weather_data="allProps"></Content>    
  </div>
</template>

<script>
import Content from './components/Content.vue'
import {buttonProps} from './props'

let weatherObj = {
        location: "California",
        temperature: {
          current: "35 C",
        },
        highlights: {
          uvindex: "3",
          windstatus: {
            speed: "30 km/h",
            direction: "N-E",
          },
          visibility: "12 km",
        },
      }

let allProps = {...buttonProps, ...weatherObj}

export default {
  name: 'app',
  components: {
    'Content': Content
  },
  data () {
    return {
      filename: 'App.vue',
      buttonProps: buttonProps,      
      allProps: allProps,
    }
  },
  methods: {
    returnProps: () => {
      return {...this.weather_data, ...this.buttonProps}
    }

  },
  computed: {

  },
}
</script>

<style>

</style>


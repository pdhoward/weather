<template>
  <div>
    <p>This child components of Content.vue are:</p>
    <ul>
      <li v-for="child in childComponents">{{ child }}</li>
    </ul>
      <div id="pagecontent">      
      {{ weather_data }}

      <li v-for="x in weather_data">{{ x }}</li>   </div>
  </div>
</template>

<script>
export default {
  props: ["weather_data"],
  data () {
    return {
      childComponents: ['TempVarChart.vue', 'Highlights.vue']
    }
  },
  methods: {

  },
  computed: {

  },
}
</script>

<style>

</style>

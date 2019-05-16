<template>
  <div id="highlights">
    <p>Weather Highlights:</p>
    {{ highlights }}
    <li v-for="x in highlights">{{ x }}</li>
    <UVIndex :highlights="highlights"></UVIndex>
    <Visibility :highlights="highlights"></Visibility>
    <WindStatus :highlights="highlights"></WindStatus>
  </div>
</template>

<script>
import UVIndex from './UVIndex.vue'
import Visibility from './Visibility.vue'
import WindStatus from './WindStatus.vue'
export default {
  props: ["highlights"],
  components: {
    'UVIndex': UVIndex,
    'Visibility': Visibility,
    'WindStatus': WindStatus
  },
  data () {
    return {

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

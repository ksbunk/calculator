<template>
  <div id="app" class="container">
    <main>
      <div class="py-5 text-center">
        <h2>Measurement Additionner</h2>
      </div>
      <MeasurementAddition></MeasurementAddition>
    </main>
  </div>
</template>

<script>
import MeasurementAddition from './components/MeasurementAddition.vue'

export default {
  name: 'App',
  components: {
    MeasurementAddition
  },

}
</script>

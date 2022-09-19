<template>
  <div v-if="measurementUnits" class="row g-5">
    <div class="col-md-5 col-lg-4 order-md-last">
      <h4 class="d-flex justify-content-between align-items-center mb-3">
        <span>Last Results</span>
      </h4>
      <ul class="list-group mb-3">
        <li v-for="(result, idx) in additionResults.slice().reverse()" :key="idx" class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <small v-for="(measurement, m) in result.measurements" :key="m" class="text-muted">{{ measurement.value }}{{ measurement.unit }} {{ (m < (result.measurements.length - 1)) ? '+ ' : '' }}</small>
          </div>
          <b>= {{ result.result.value }}{{ result.result.unit }}</b>
        </li>
      </ul>
    </div>

    <div class="col-md-7 col-lg-8">
      <h4 class="mb-3">Current Sum</h4>

        <measurement-editor
          v-for="(measurement, index) in measurements"
          :key="measurement.idx"
          :units="measurementUnits"
          v-model="measurements[index]"
          @delete="deleteMeasurement(index)"
        ></measurement-editor>

        <div class="row g-3 mt-2">
          <div class="col-sm-2">
            <button type="button" class="btn btn-success" @click="addMeasurement()">New Measurement</button>
          </div>
        </div>

        <hr class="my-4">
        <button class="w-100 btn btn-primary btn-lg" @click="calculateAddition()">Calculate Addition</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MeasurementEditor from './MeasurementEditor.vue'

export default {
  components: {
    MeasurementEditor,
  },
  data() {
    return {
      measurementUnits: null,
      measurements: [],
      additionResults: [],
    };
  },
  props: {
    msg: String
  },
  methods: {
    calculateAddition() {
      axios.post('https://localhost:5001/api/measurementsum', this.measurements).then(
        (response) => {
          this.additionResults.push({
            result : response.data,
            measurements: [...this.measurements],
          });
        },
        (error) => {
          // This message needs proper formatting
          alert(JSON.stringify(error.response.data));
        },
      );
    },
    addMeasurement() {
      const firstUnit = this.measurementUnits[0];
      const newIndex = (this.measurements.length > 0) ? Math.max(...this.measurements.map(o => o.idx)) + 1 : 0;
      this.measurements.push({
        idx: newIndex,
        value: 0,
        unit: firstUnit.unitName,
      });
    },
    deleteMeasurement(index) {
      this.measurements.splice(index, 1);
    },
    loadMeasurementUnits() {
      axios.get('https://localhost:5001/api/measurementunits').then(r => this.measurementUnits = r.data);
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.measurementUnits) {
        this.loadMeasurementUnits();
      }
    });
  },
}
</script>
<template>
  <div class="row g-3 mt-1">
    
    <div class="col-sm-6">
      <input type="text" class="form-control" placeholder="Value..." :value="value.value" @input="updateValue">
      <div class="invalid-feedback">
        Value is required.
      </div>
    </div>

    <div class="col-sm-4">
      <select class="form-control" @input="updateUnit">
        <option v-for="unit in units" :key="unit.id" :selected="value.units === unit.unitName">{{ unit.unitName }}</option>
      </select>
      <div class="invalid-feedback">
        Unit is required.
      </div>
    </div>

    <div class="col-sm-2">
      <button type="button" class="btn btn-danger" @click="$emit('delete')">Delete</button>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    units: {
      type: Array,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateValue(event) {
      let newValue = {...this.value};
      newValue.value = event.target.value;
      this.$emit('input', newValue);
    },
    updateUnit(event) {
      let newValue = {...this.value};
      newValue.unit = event.target.value;
      this.$emit('input', newValue);
    },
  }
}
</script>
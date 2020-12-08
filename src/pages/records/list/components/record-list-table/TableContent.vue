<template>
  <tbody>
  <tr
      v-for="item in items"
      :key="item.id"
  >
    <td>
      {{ item.name }}
    </td>
    <td class="text-center">
      <ProcessStateButtons
          :state="item.recordState"
          @play="onProcessChangeState(item, 'recordState', 'IN_PROGRESS')"
          @stop="onProcessChangeState(item, 'recordState', 'NOT_STARTED')"
      />
      <span v-if="item.recordStep !== 0">
        <span class="text-caption red--text font-weight-bold">{{ item.recordStep }}</span>
        records
      </span>
    </td>
    <td class="text-center">
      <ProcessStateButtons
          :state="item.simulationState"
          :has-paused-btn="true"
          @pause="onProcessChangeState(item, 'simulationState', 'PAUSED')"
          @play="onProcessChangeState(item, 'simulationState', 'IN_PROGRESS')"
          @stop="onProcessChangeState(item, 'simulationState', 'NOT_STARTED')"
      />
      <span v-if="item.simulationStep  && item.simulationStep !== 0">
        <span class="text-caption red--text font-weight-bold">{{ item.simulationStep }}</span>
        step
      </span>
    </td>
    <td class="text-center">
      <v-btn
          class="mx-2"
          fab
          dark
          small
          color="cyan"
          :to="`/records/${item.id}`"
      >
        <v-icon dark>
          mdi-pencil
        </v-icon>
      </v-btn>
      <v-btn
          class="mx-2"
          fab
          dark
          small
          color="red"
          @click="$emit('deleteItem', item)"
      >
        <v-icon dark>
          mdi-delete-forever
        </v-icon>
      </v-btn>
    </td>
  </tr>
  </tbody>
</template>
<script>
import ProcessStateButtons from "@/pages/records/common/ProcessStateButtons";

export default {
  components: { ProcessStateButtons },
  props: ['items'],
  methods: {
    onProcessChangeState(item, field, newState) {
      this.$emit('editItem', { ...item, [field]: newState })
    }
  }
}
</script>
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
      <v-btn
          class="mx-2"
          fab
          dark
          small
          color="cyan"
          :to="`/patterns/${item.id}`"
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

export default {
  props: ['items'],
  methods: {
    onProcessChangeState(item, field, newState) {
      this.$emit('editItem', { ...item, [field]: newState })
    }
  }
}
</script>
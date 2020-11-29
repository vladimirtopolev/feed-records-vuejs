<template>
  <tbody>
  <tr
      v-for="item in items"
      :key="item.fileName"
  >
    <td>
      {{ item.fileName }}
    </td>
    <td>
      {{ item.feedUrl }}
    </td>
    <td class="text-center">
      <v-btn
          icon
          color="cyan"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
          icon
          color="red"
      >
        <v-icon dark>mdi-delete-forever</v-icon>
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
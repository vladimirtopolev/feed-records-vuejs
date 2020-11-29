<template>
  <v-sheet
      height="100%"
      tile
  >
    <v-row
        class="fill-height"
        align="center"
        justify="center"
    >
      <div class="display-3">
        <v-text-field
            :value="name"
            @change="val => $emit('update:name', val)"
            label="Record name"
        />
        <v-btn-toggle
            :value="createStrategy"
            @change="val => $emit('update:createStrategy', val)"
        >
          <v-btn>
            <v-icon>mdi-wrench</v-icon>
            From scratch
          </v-btn>

          <v-btn>
            <v-icon>mdi-lock-pattern</v-icon>
            From pattern
          </v-btn>
        </v-btn-toggle>
      </div>
    </v-row>
  </v-sheet>

</template>

<script>
export default {
  props: ['name', 'createStrategy']
}
</script>
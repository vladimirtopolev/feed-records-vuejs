<template>
  <div>
    <h4>Preview</h4>
    <v-simple-table dense v-if="handledFeeds.length > 0">
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            FileName
          </th>
          <th class="text-left">
            Feed url
          </th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="feed in handledFeeds"
            :key="feed.fileName"
        >
          <td>{{ feed.fileName }}</td>
          <td>
            <v-btn text
                   class="text-lowercase"
                   :href="feed.feedUrl"
                   target="_blank"
            >
              {{ feed.feedUrl }}
            </v-btn></td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div v-else class="text-center">
      <p>Fill pattern variables above</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['handledFeeds']
}
</script>
<template>
  <section>
    <span class="fas fa-clock">
         <strong class="display-color" style="padding-left: 0.5rem">{{ tempoDecorrido }}</strong>
    </span>

  </section>
</template>
<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'CronometroComponent',
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0
    }
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11, 19);
    }
  },
})
</script>
<style scoped>
.display-color {
  color: var(--texto-primario) !important;
}
</style>
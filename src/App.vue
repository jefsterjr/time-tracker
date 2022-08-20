<template>
  <main class="columns is-gapless is-mobile">

    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarters">
      <FormularioStart/>
    </div>

  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BarraLateral from "@/components/BarraLateral.vue";
import FormularioStart from "@/components/Formulario.vue";


export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    FormularioStart
  }
});
</script>

<style>

</style>

<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova Tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
      </div>
      <div class="column">
        <TemporizadorComp />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import TemporizadorComp from "@/components/TemporizadorComp.vue";

export default defineComponent({
  name: 'FormularioStart',
  components: {TemporizadorComp}

})
</script>
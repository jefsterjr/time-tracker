<template>
  <div class="box">
    <div class="columns">
      <div class="column is-8" role="form" aria-label="Formulário para criação de uma nova Tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricaoTarefa">
      </div>
      <div class="column">
        <TemporizadorComp @aoTemporarizadorFinalizado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import TemporizadorComp from "@/components/TemporizadorComp.vue";

export default defineComponent({
  name: 'FormularioStart',
  data() {
    return {
      descricaoTarefa: ''
    }
  },
  components: {TemporizadorComp},
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.descricaoTarefa = '';
    }
  }

})
</script>
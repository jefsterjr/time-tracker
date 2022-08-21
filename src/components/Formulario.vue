<template>
  <div class="box formulario">
    <div class="columns">
      <div class="column is-7" role="form" aria-label="Formulário para criação de uma nova Tarefa">
        <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricaoTarefa">
      </div>
      <div class="column">
        <TemporizadorComp @aoTemporarizadorFinalizado="finalizarTarefa" @aoTemporarizadorAbortado="finalizarTarefa"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import TemporizadorComp from "@/components/TemporizadorComp.vue";


export default defineComponent({
  name: 'FormularioStart',
  emits: ['aoSalvarTarefa'],
  data() {
    return {
      descricaoTarefa: ''
    }
  },
  components: {TemporizadorComp},
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit('aoSalvarTarefa', {
        duracao: tempoDecorrido,
        descricao: this.descricaoTarefa
      })
      this.descricaoTarefa = '';
    }
  }

})
</script>
<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
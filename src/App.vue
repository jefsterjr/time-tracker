<template>
  <main class="columns is-gapless is-mobile">

    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarters">
      <FormularioStart @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaComp v-for="(tarefa, index) in tarefas" :key="index"  :tarefa="tarefa"/>
      </div>
      <BoxComp v-if="listaEstaVazia">
        Sem tarefas adicionadas
      </BoxComp>
    </div>

  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BarraLateral from "@/components/BarraLateral.vue";
import FormularioStart from "@/components/Formulario.vue";
import TarefaComp from "@/components/TarefaComp.vue";
import ITarefa from "@/interfaces/ITarefa";
import BoxComp from "@/components/Box.vue";


export default defineComponent({
  name: 'App',
  components: {
    BoxComp,
    BarraLateral,
    FormularioStart,
    TarefaComp
  },
  data() {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  computed: {
    listaEstaVazia(): boolean  {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) :void {
      this.tarefas.push(tarefa);
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>

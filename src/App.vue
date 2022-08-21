<template>
  <main class="columns is-gapless is-mobile" :class="{'modo-escuro':modoEscuroAtivo}">

    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarters conteudo">
      <FormularioStart @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaComp v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxComp v-if="listaEstaVazia">
          Sem tarefas adicionadas
        </BoxComp>
      </div>

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
      tarefas: [] as ITarefa[],
      modoEscuroAtivo: false
    }
  },
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.tarefas.push(tarefa);
    },
    trocarTema(ativo: boolean) {
      console.log(ativo)
      this.modoEscuroAtivo = ativo;
    }
  }
});
</script>

<style>
.lista {
  padding: 1.5rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>

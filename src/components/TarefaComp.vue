<template>
  <BoxComp>
    <div class="columns">
      <div class="column is-5">
        {{ tarefa.descricao }}
      </div>
      <div class="column">
        <CronometroComponent :tempoEmSegundos="tarefa.duracao"/>
      </div>
    </div>
  </BoxComp>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import CronometroComponent from "@/components/CronometroComponent.vue";
import ITarefa from "@/interfaces/ITarefa";
import BoxComp from "@/components/Box.vue";

export default defineComponent({
  name: 'TarefaComp',
  components: {BoxComp, CronometroComponent},
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true
    }
  }

});
</script>

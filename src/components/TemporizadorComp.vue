<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroComponent :tempoEmSegundos="tempoEmSegundos"/>
    <BotaoComp @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando" />
    <BotaoComp @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando" />
  </div>
</template>
<script lang="ts">
import CronometroComponent from "@/components/CronometroComponent.vue"
import {defineComponent} from "vue";
import BotaoComp from "@/components/BotaoComp.vue";

export default defineComponent({
  name: 'TemporizadorComp',
  emits : ['aoTemporarizadorFinalizado'],
  components: {BotaoComp, CronometroComponent},
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++
      }, 1000)

    },
    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro)
      this.$emit('aoTemporarizadorFinalizado', this.tempoEmSegundos)
      this.tempoEmSegundos = 0;
    }
  }
});

</script>
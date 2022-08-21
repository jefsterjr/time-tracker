<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroComponent :tempoEmSegundos="tempoEmSegundos"/>
    <button class="button" @click="inicial" :disabled="cronometroRodando">
          <span class="icon">
            <i class="fas fa-play"></i>
          </span>
      <span>Play</span>
    </button>
    <button class="button" @click="finalizar" :disabled="!cronometroRodando">
          <span class="icon">
            <i class="fas fa-stop"></i>
          </span>
      <span>Stop</span>
    </button>
  </div>
</template>
<script lang="ts">
import CronometroComponent from "@/components/CronometroComponent.vue"
import {defineComponent} from "vue";

export default defineComponent({
  name: 'TemporizadorComp',
  components: {CronometroComponent},
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false
    }
  },
  methods: {
    inicial() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos++
      }, 1000)

    },
    finalizar() {
      this.cronometroRodando = false;
      clearInterval(this.cronometro)
      console.log('Finalizando')
    }
  }
});

</script>
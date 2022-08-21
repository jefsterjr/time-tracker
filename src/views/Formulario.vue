<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">Nome Projeto </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
    <form @submit.prevent="salvar">
    </form>
  </section>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import {useStore} from "@/store";
import {ADICIONA_PROJETO, EDITAR_PROJETO} from "@/store/tipo-mutacao";

export default defineComponent({
  name: 'FormularioView',
  props: {
    id: {
      type: String
    }
  },
  data() {
    return {
      nomeDoProjeto: ''
    }
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(projeto => projeto.id === this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(EDITAR_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      } else {
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }

      this.nomeDoProjeto = "";
      this.$router.push('/projetos');
    }
  },
  setup() {
    const store = useStore();
    return {
      store
    }
  }

});
</script>

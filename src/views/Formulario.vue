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
import {ADICIONA_PROJETO, EDITAR_PROJETO, NOTIFICAR} from "@/store/tipo-mutacao";
import {TipoNotificacao} from "@/interfaces/INotificacao";

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
      if(this.nomeDoProjeto && this.nomeDoProjeto.length > 0){
        if (this.id) {
          this.store.commit(EDITAR_PROJETO, {
            id: this.id,
            nome: this.nomeDoProjeto
          })
        } else {
          this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
        }

        this.nomeDoProjeto = "";
        this.store.commit(NOTIFICAR, {
          id: 1,
          mensagem: "Projeto adicionado com sucesso",
          titulo: "Projeto adicionado",
          tipo: TipoNotificacao.SUCESSO
        })
        this.$router.push('/projetos');
      }else{
        this.store.commit(NOTIFICAR, {
          id: 1,
          mensagem: "Nome do projeto não pode ser vazio",
          titulo: "Erro",
          tipo: TipoNotificacao.FALHA
        })
      }

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

import IProjeto from "@/interfaces/IProjeto";
import {createStore, Store, useStore as useStoreX} from "vuex";
import {InjectionKey} from "vue";
import {ADICIONA_PROJETO, EDITAR_PROJETO, EXCLUIR_PROJETO} from "@/store/tipo-mutacao";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as IProjeto
            state.projetos.push(projeto);
        },
        [EDITAR_PROJETO](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id === projeto.id);
            state.projetos[index] = projeto;
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(projeto => projeto.id != id);
        }
    }
})

export function useStore(): Store<Estado> {
    return useStoreX(key)
}
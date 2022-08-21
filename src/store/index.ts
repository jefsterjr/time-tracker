import IProjeto from "@/interfaces/IProjeto";
import {createStore, Store, useStore as useStoreX} from "vuex";
import {InjectionKey} from "vue";

interface Estado {
    projetos: IProjeto[]
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeProjeto
            } as IProjeto
            state.projetos.push(projeto);
        }
    }
})

export function useStore(): Store<Estado>{
    return useStoreX(key)
}
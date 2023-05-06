import axios from "axios";

export const catalogModule = {
    state: () => ({
        pizzas_list: [],
        isLoading: true,
        filter:{
            category: null,
            type: 'rating',
            order: 'asc'
        }
    }),
    getters: {},
    mutations: {
        receivePizzasList(state, data) {
            state.pizzas_list = [...data]
            state.isLoading = false
        },
        setCategory(state, data){
            state.filter.category = data
        },
        setFilterType(state, data){
            state.filter.type = data
        },
    },
    actions: {
        getPizzasList({commit, state}) {
            axios
                .get(`http://localhost:3001/pizzas?${state.filter.category !== null ? `category=${state.filter.category}` : ''}&_sort=${state.filter.type}&_order=${state.filter.order}`)
                .then(({data}) => commit('receivePizzasList', data))
        }
    },
    namespaced: true
}
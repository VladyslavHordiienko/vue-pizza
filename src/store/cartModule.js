export const cartModule = {
    state: () => ({
        cart: {},
        totalPrice: 0,
        totalCount: 0
    }),
    mutations: {
        addPizzaToCart(state, data) {
            const pizzaGroup = !state.cart[data.id]
                ? [data]
                : [...state.cart[data.id].pizzaGroup, data]

            const newCart = {
                ...state.cart,
                [data.id]: {
                    pizzaGroup: pizzaGroup,
                    groupTotalPrice: pizzaGroup.length * data.price,
                }
            }
            state.cart = newCart
            state.totalPrice += data.price

            const items = Object.values(state.cart).map(el => el.pizzaGroup)
            state.totalCount = [].concat.apply([], items).length
        },
        clearCart(state) {
            state.cart = {}
            state.totalPrice = 0
            state.totalCount = 0
        },
        removePizzaGroup(state, data) {
            const currentTotalPrice = state.cart[data.id].groupTotalPrice
            const currentTotalCount = state.cart[data.id].pizzaGroup.length
            delete state.cart[data.id]
            state.totalPrice -= currentTotalPrice
            state.totalCount -= currentTotalCount
        },
        plusPizzaGroup(state, data) {
            state.cart[data.id].pizzaGroup = [
                ...state.cart[data.id].pizzaGroup,
                state.cart[data.id].pizzaGroup[0]
            ]
            state.cart[data.id].groupTotalPrice += data.price
            state.totalPrice += data.price
            state.totalCount = ++state.totalCount
        },
        minusPizzaGroup(state, data) {
            if (state.cart[data.id].pizzaGroup.length > 1) {
                state.cart[data.id].pizzaGroup = state.cart[data.id].pizzaGroup.slice(1)
                state.cart[data.id].groupTotalPrice -= data.price
                state.totalPrice -= data.price
                state.totalCount = --state.totalCount
            }
        }
    },
    namespaced: true
}
export const count = {
  state: 0,
  reducers: {
    increment(state, payload) {
      return state + payload
    },
    decrement(state, payload) {
      return state - payload
    }
  },
  effects: (dispatch) => ({
    async incrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.increment(payload)
    },
    async decrementAsync(payload, rootState) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      dispatch.count.decrement(payload)
    },
  })
}
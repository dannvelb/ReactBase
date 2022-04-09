export default (state,action) => ({
    ...state,
    ...action.data
})

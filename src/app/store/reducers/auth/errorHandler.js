export default (state, action, initialState) => {
    console.log(action)
    return({
    ...initialState,
    loadingLogin: false,
    loadingQClient: false,
    [action.name]: action.error,
})}

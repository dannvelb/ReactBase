export const type = 'AUTH_ERROR';

export const action = (name, error) =>
({
    type,
    name,
    error
});

export const getDataFromStorage = () => ({ type: 'GET_DATA_FROM_STORAGE' });
export const setDataToStorage = (payload?: boolean) => ({ type: 'SET_DATA_TO_STORAGE', payload });
export const removeDataFromStorage = () => ({ type: 'REMOVE_DATA_FROM_STORAGE' });

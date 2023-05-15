import { useAppSelector } from '../../../hooks/useAppSelector';

export const useIsAuth = () => useAppSelector((state) => state.auth.isAuth);

import { useAppSelector } from '../../../hooks/useAppSelector';

export const useSearchParams = () => useAppSelector((state) => state.searchParams);

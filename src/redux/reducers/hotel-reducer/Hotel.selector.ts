import { useAppSelector } from '../../../hooks/useAppSelector';

export const useHotels = () => useAppSelector((state) => state.hotels.hotels);
export const useIsLoadingHotels = () => useAppSelector((state) => state.hotels.isLoading);
export const useErrorHotels = () => useAppSelector((state) => state.hotels.error);

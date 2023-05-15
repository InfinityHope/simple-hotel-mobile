import { ISearchParams } from '../../../interfaces/SearchParams';

export const fetchHotels = (payload?: ISearchParams) => ({
  type: 'FETCH_HOTELS',
  payload
});

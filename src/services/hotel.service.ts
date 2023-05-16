import axios from 'axios';

import { API_URL } from '@env';
import { addDays } from '../helpers/date';
import { IHotel } from '../interfaces/Hotel.interface';

export const HotelService = {
  async getHotels(location: string, nights: number, checkIn: string): Promise<IHotel> {
    const checkOut = addDays(+nights, checkIn);
    const { data } = await axios.get(
      `${API_URL}?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=20`
    );
    return data;
  }
};

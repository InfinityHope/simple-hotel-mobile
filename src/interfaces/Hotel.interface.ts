export interface IHotel {
  hotelId: number
  hotelName: string
  stars: number
  priceAvg: number
  priceFrom: number
  location: {
    name: string
    country: string
  }
  isFavorite: boolean
}

export interface IFavoriteHotel {
  hotelId: number
  hotelName: string
  stars: number
  priceAvg: number
  city: string
  isFavorite: boolean
  checkIn: string
  nights: number
}

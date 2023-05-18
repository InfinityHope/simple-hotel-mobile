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

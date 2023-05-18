export const formatPrice = (price: number) => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(price);

export const convertShortDate = (date: Date) => {
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);

  return `${date.getFullYear()}-${month}-${day}`;
};

export const convertLongDate = (date: string) => new Date(date).toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
});

export const addDays = (days: number, date: string) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return convertShortDate(newDate);
};

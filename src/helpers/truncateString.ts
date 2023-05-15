export const truncateString = (str: string, width: number) => (str.length > width ? `${str.slice(0, width)}...` : str);

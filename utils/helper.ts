export const formatNumber = (number: number) => {
  return new Intl.NumberFormat('tr-TR').format(number);
}

export const formatDate = (date: Date) => {
  return new Date(date).toDateString();
}

export const toTitleCase = (str: string): string => {
  if (!str) {
    return ''
  }
  
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}

export const getId = (url: string): string => {
  return url.split('/').at(-2) as string
}

export const filterFulfilled = <T>(results: PromiseSettledResult<T>[]): T[] =>
  results.filter((result): result is PromiseFulfilledResult<T> => result.status === 'fulfilled').map(result => result.value);

export const debounce = <F extends (...args: any[]) => void>(func: F, wait: number): F => {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as F;
};
  
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

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

export const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const protocols = ["https://", "http://"];
    const result = protocols.find(protocol => url.includes(protocol))
    
    let path = url;
    if (!result) {
      path = `${BASE_URL}/${url}`;
    }
    const response = await fetch(path);
    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
};

export const filterFulfilled = <T>(results: PromiseSettledResult<T>[]): T[] =>
  results.filter((result): result is PromiseFulfilledResult<T> => result.status === 'fulfilled').map(result => result.value);

const debounce = <F extends (...args: any[]) => void>(func: F, wait: number): F => {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as F;
};
  
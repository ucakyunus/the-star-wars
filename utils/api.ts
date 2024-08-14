const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

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
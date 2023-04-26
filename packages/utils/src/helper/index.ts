export const fetchAPI = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (res.status !== 200) {
      throw new Error("Error");
    }
    return data;
  } catch (e) {
    throw new Error("Error");
  }
};

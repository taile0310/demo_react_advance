export const fetchData = async () => {
  const res = await fetch("https://6523ab0aea560a22a4e8a349.mockapi.io/menus");
  if (res.ok) {
    const data = await res.json();
    return data;
  }
};

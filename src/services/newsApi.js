const API_KEY = "b5d8d94cad4a4c3881d6b1200a7146b6"; // replace later
const BASE_URL = "https://newsapi.org/v2";

export async function getEducationNews() {
  const res = await fetch(
    `${BASE_URL}/everything?q=education OR exam OR college&language=en&pageSize=5&apiKey=${API_KEY}`
  );
  const data = await res.json();
  return data.articles;
}

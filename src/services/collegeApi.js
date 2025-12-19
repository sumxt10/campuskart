export async function fetchIndiaUniversities() {
  const res = await fetch("https://localhost:5000/api/colleges");

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.error || "Backend error");
  }

  return res.json();
}

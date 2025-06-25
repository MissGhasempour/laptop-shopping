export default async function getProducts() {
  const response = await fetch(
    "https://www.anapioficeandfire.com/api/characters",
    {
      headers: {
        "Content-Type": "application/json"
      },
      cache: "force-cache",
    }
  );

  try {
    if (!response.ok) {
      return;
    } else return response.json();
  } catch (err) {
    throw err;
  }
}

export default async function helper() {
  const fetched = await fetch(
    "https://www.anapioficeandfire.com/api/characters"
  );
  const res = await fetched.json();
  return res;
}

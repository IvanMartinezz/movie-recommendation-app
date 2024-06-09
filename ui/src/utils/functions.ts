const apiKey = "e70a965eaca8e47f9be5af3520099451";

export async function getMovies(): Promise<Movie[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const data = await res.json();
  return data.results;
}

export function truncateDecimals(num: number, decimals: number): number {
  const strNum = num.toString();
  const [integerPart, decimalPart] = strNum.split(".");
  const truncatedDecimalPart = (decimalPart || "").substring(0, decimals);
  return parseFloat(`${integerPart}.${truncatedDecimalPart}`);
}

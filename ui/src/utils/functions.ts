export function searchMovies(movies: Movie[], searchTerm: string): Movie[] {
  const lowerCaseSearchTerm = searchTerm.toLowerCase();
  return movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerCaseSearchTerm)
  );
}

export function truncateDecimals(num: number, decimals: number): number {
  const strNum = num.toString();
  const [integerPart, decimalPart] = strNum.split(".");
  const truncatedDecimalPart = (decimalPart || "").substring(0, decimals);
  return parseFloat(`${integerPart}.${truncatedDecimalPart}`);
}

export function getYearFromDate(dateString: string): string {
  const dateParts = dateString.split("-");
  return dateParts[0];
}

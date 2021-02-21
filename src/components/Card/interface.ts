export default interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string | null;
  vote_average: number;
  parsedVoteAverage: string;
  vote_count: number;
  poster_path: string | null;
  image: string | null;
}

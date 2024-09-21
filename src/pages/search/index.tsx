import { ReactNode } from "react";
import SearchableLayout from "@/components/searchable-layout";
import movies from '@/mock/dummy.json'
import MovieItem from "@/components/movie-item";

export default function Search() {

  return <div>
            {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
  </div>
  
}

Search.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

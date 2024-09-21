import style from "./index.module.css";
import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import movies from "@/mock/dummy.json";
import MovieItem from "@/components/movie-item";

export default function Home() {
  return (
    <div className={style.container}>
      <h3>지금 가장 추천하는 영화</h3>
      <div className={style.recommended_container}>
        {movies.slice(0, 3).map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
      <h3>등록된 모든 영화</h3>
      <div className={style.all_container}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};

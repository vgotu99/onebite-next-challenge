import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return <h1>검색결과 : {q}</h1>;
}

import { useRouter } from "next/router";
import style from "./searchable-layout.module.css";
import { ReactNode, useEffect, useState } from "react";

export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [searchText, setSearchText] = useState("");

  const router = useRouter();

  const q = router.query.q as string;

  useEffect(() => {
    setSearchText(q || "");
  }, [q]);

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const onSubmit = () => {
    if (!searchText || q === searchText) {
      return;
    }
    router.push(`/search?q=${searchText}`);
  };

  return (
    <div>
      <div className={style.container}>
        <input
          onChange={onChangeSearchText}
          value={searchText}
          placeholder={"검색어를 입력하세요 ..."}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}

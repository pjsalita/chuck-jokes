import { FC } from "react";
import { http } from "utils";
import "./styles.scss";

export const SearchSection: FC = () => {
  const search = async (query?: string) => {
    if ((query?.length || 0) >= 3) {
      const { data } = await http.get(`/jokes/search?query=${query}`);
      console.log({ data });
    }
  };

  return (
    <div className="search">
      <h1>The Joke Bible</h1>
      <p>Daily Laughs for you and yours</p>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="How can we make you laugh today?"
        autoComplete="off"
        onChange={(e) => search(e.currentTarget.value)}
      />
    </div>
  );
};

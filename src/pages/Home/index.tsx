import { Button, Card, Categories } from "components";
import { FC, memo, useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { http } from "utils";
import "./styles.scss";

const VISIBLE_CARD_COUNT = 6;

export const Home: FC = memo(() => {
  const [jokes, setJokes] = useState<any[]>([]);
  const [visibleJokes, setVisibleJokes] = useState<number>(VISIBLE_CARD_COUNT);

  useEffect(() => {
    const fetchJokes = async () => {
      const { data } = await http.get("/jokes/search?query=all");
      console.log(data.result[0]);
      setJokes(data.result);
    };

    if (!jokes.length) {
      fetchJokes();
    }
  }, [jokes]);

  return (
    <div className="container">
      <Categories />

      <div className="jokes">
        {jokes.slice(0, visibleJokes).map((joke) => (
          <Card key={joke.id} data={joke} />
        ))}

        <Button
          ghost
          onClick={() => setVisibleJokes((prev) => prev + VISIBLE_CARD_COUNT)}
        >
          View More <BsArrowDown />
        </Button>
      </div>
    </div>
  );
});

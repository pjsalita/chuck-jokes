import { FC, memo } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {
  data: any;
}

export const Card: FC<Props> = memo(({ data }) => {
  return (
    <div className="card">
      <h2 className="card-category">
        {data.categories.join(", ") || "Uncategorized"}
      </h2>
      <Link to={`/jokes/${data.id}`} className="stretched-link">
        {data.value}
      </Link>
    </div>
  );
});

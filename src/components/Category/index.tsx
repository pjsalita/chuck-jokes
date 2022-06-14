import clsx from "clsx";
import { FC, memo } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props {
  name: string;
  viewAll?: boolean;
}

export const Category: FC<Props> = memo(({ name, viewAll }) => {
  return (
    <Link
      to={viewAll ? "/" : `/category/${name}`}
      className={clsx("category", { "view-all": viewAll })}
    >
      {name} {viewAll && <BsArrowDown />}
    </Link>
  );
});

import clsx from "clsx";
import { Button } from "components";
import { FC, memo } from "react";
import { BsArrowDown } from "react-icons/bs";
import "./styles.scss";

interface Props {
  name: string;
  viewAll?: boolean;
}

export const Category: FC<Props> = memo(({ name, viewAll }) => {
  return (
    <Button
      link={viewAll ? "/" : `/category/${name}`}
      className={clsx("category", { ghost: viewAll })}
    >
      {name} {viewAll && <BsArrowDown />}
    </Button>
  );
});

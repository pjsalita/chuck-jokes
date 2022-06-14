import { Categories } from "components";
import { FC, memo, useEffect } from "react";
import { http } from "utils";

export const Home: FC = memo(() => {
  return (
    <div>
      <Categories />
    </div>
  );
});

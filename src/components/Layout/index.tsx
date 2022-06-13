import { Header, SearchSection } from "components";
import { FC, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <SearchSection />

      {children}
    </div>
  );
};

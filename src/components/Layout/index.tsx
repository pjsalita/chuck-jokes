import { Header, SearchSection } from "components";
import { FC, ReactNode } from "react";
import "./styles.scss";

interface Props {
  children?: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <SearchSection />

      {children}
    </div>
  );
};

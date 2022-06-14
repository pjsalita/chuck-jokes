import clsx from "clsx";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

interface Props extends React.ComponentPropsWithRef<"a"> {
  children?: ReactNode;
  ghost?: boolean;
  link?: string;
}

export const Button: FC<Props> = ({
  className,
  children,
  ghost,
  link,
  ...props
}) => {
  return (
    <Link
      to={link || ""}
      className={clsx("btn", className, { ghost })}
      {...props}
    >
      {children}
    </Link>
  );
};

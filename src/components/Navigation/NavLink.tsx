import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import React from "react";
import classNames from "classnames";
import IconWrapper from "../IconWrapper";

interface NavLinkProps {
  to: string;
  text?: string;
  isActive?: boolean;
  className?: string;
  onClick?: () => void;
  homeButton?: boolean;
  children?: React.ReactNode;
}

export default function NavLink({
  to,
  text,
  isActive,
  className,
  onClick,
  homeButton,
  children,
}: NavLinkProps) {
  if (isActive && className !== classNames("button", "contact")) {
    className = classNames(className, "isActive");
  }

  return (
    <Link to={to} className={className} onClick={onClick}>
      {homeButton && <IconWrapper icon={IoHome} />}
      {children ?? text}
    </Link>
  );
}

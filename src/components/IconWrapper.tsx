import React from "react";
import { IconType } from "react-icons";

interface IconWrapperProps {
  icon: IconType | React.ComponentType<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className }) => {
  // Add type assertion to ensure Icon is a valid component
  const ValidIcon = Icon as React.ComponentType<{ className?: string }>;
  return <ValidIcon className={className} />;
};

export default IconWrapper;
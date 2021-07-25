import { ReactNode } from "react";

/**
 * Link props
 * @author treetips
 */
export type LinkProps = {
  icon?: ReactNode;
  isExternal?: boolean;
  url: string;
  label: string;
};

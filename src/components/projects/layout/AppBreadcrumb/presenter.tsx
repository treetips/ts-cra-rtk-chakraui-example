import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { Link } from "react-router-dom";
import { LinkProps } from "../../../../types/props/LinkProps";

type Props = {
  pages: {
    home: LinkProps;
  };
  links?: { href: string; label: string }[];
};

/**
 * Presentational Component
 * @author treetips
 */
export const AppBreadcrumb: VFC<Props> = memo(({ pages, links }) => {
  if (!links) {
    return <></>;
  }

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={Link}
          to={pages.home.url}
          textDecoration="underline"
        >
          {pages.home.label}
        </BreadcrumbLink>
      </BreadcrumbItem>

      {links?.map((link: { href: string; label: string }) => {
        return (
          <BreadcrumbItem key={link.href}>
            <BreadcrumbLink as={Link} to={link.href} textDecoration="underline">
              {link.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
});

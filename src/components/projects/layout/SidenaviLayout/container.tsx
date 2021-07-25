import React, { ComponentProps, memo } from "react";
import { SidenaviLayout } from ".";
import { useSidenaviLayout } from "./hooks";

type Props = Omit<
  ComponentProps<typeof SidenaviLayout>,
  "sidenavi" | "HeadComponent"
>;

/**
 * Container Component
 * @author treetips
 */
export const SidenaviLayoutContainer: React.FC<Props> = memo(
  ({
    breadcrumbs,
    isHidePageSection,
    pageTitle,
    pageDescription,
    children,
  }) => {
    const { sidenavi, apiErrorResponsePayload } = useSidenaviLayout();
    return (
      <SidenaviLayout
        sidenavi={sidenavi}
        apiErrorResponsePayload={apiErrorResponsePayload}
        isHidePageSection={isHidePageSection}
        breadcrumbs={breadcrumbs}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
      >
        {children}
      </SidenaviLayout>
    );
  }
);

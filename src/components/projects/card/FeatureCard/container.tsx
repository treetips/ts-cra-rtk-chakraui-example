import { ComponentProps, memo, VFC } from "react";
import { FeatureCard } from ".";

type Props = ComponentProps<typeof FeatureCard>;

/**
 * Container Component
 * @author treetips
 */
export const FeatureCardContainer: VFC<Props> = memo(
  ({ image, title, url, features }) => {
    return (
      <FeatureCard image={image} title={title} url={url} features={features} />
    );
  }
);

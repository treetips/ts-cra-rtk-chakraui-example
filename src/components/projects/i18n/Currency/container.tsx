import { ComponentProps, memo, VFC } from "react";
import { Currency } from ".";

type Props = ComponentProps<typeof Currency>;

/**
 * Container Component
 * @author treetips
 */
export const CurrencyContainer: VFC<Props> = memo(({ value, currencyCode }) => {
  return <Currency value={value} currencyCode={currencyCode} />;
});

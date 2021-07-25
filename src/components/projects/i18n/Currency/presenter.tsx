import { memo, VFC } from "react";
import { FormattedNumber } from "react-intl";

type Props = {
  value: number;
  currencyCode: string;
};

/**
 * Presentational Component
 * @author treetips
 */
export const Currency: VFC<Props> = memo(({ value, currencyCode }) => (
  // Avoid warnings because props are defined with the reserved word "style".
  // eslint-disable-next-line
  <FormattedNumber value={value} style="currency" currency={currencyCode} />
));

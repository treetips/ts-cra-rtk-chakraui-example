import { memo, VFC } from "react";
import { FormattedDate } from "react-intl";

type Props = {
  value: Date;
};

/**
 * Presentational Component
 * @author treetips
 */
export const DateTime: VFC<Props> = memo(({ value }) => (
  <FormattedDate
    value={value}
    year="numeric"
    month="long"
    day="numeric"
    weekday="long"
    hour12={false}
    hour="numeric"
    minute="numeric"
    second="numeric"
    timeZone="Asia/Tokyo"
  />
));

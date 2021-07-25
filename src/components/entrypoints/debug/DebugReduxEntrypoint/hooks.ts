import {
  useCounter,
  useInputInteger,
  usePage,
  useTranslate,
} from "../../../../hooks";

/**
 * Hooks for Presentational Component
 * @author treetips
 */
export const useDebugReduxEntrypoint = () => {
  const { Page, getAbsoluteUrl } = usePage();
  const page = Page["debug.redux"];
  const { count, increment, decrement, multiply, divide } = useCounter();
  const [inputNumber, { handleInputInteger, resetInputInteger }] =
    useInputInteger({ initialState: 7, min: 1 });
  const { translate } = useTranslate();

  return {
    page,
    getAbsoluteUrl,
    count,
    increment,
    decrement,
    multiply,
    divide,
    inputNumber,
    handleInputInteger,
    resetInputInteger,
    labels: {
      reset: {
        label: translate("label.reset"),
      },
    },
  } as const;
};

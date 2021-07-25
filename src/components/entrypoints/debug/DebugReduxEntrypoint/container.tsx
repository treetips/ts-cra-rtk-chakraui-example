import { memo, VFC } from "react";
import { Helmet } from "react-helmet-async";
import { DebugReduxEntrypoint, useDebugReduxEntrypoint } from ".";
import { SidenaviLayoutContainer } from "../../../projects/layout/SidenaviLayout";

type Props = {};

/**
 * Container Component
 * @author treetips
 */
export const DebugReduxEntrypointContainer: VFC<Props> = memo(() => {
  const {
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
    labels,
  } = useDebugReduxEntrypoint();

  return (
    <SidenaviLayoutContainer
      breadcrumbs={[{ href: page.relativeUrl, label: page.pageTitle }]}
      pageTitle={page.pageTitle}
      pageDescription={page.pageDescription}
    >
      <Helmet>
        <title>{page.metaTitle}</title>
        <meta name="description" content={page.metaDescription} />
        <link rel="canonical" href={getAbsoluteUrl(page.relativeUrl)} />
      </Helmet>
      <DebugReduxEntrypoint
        count={count}
        inputNumber={inputNumber}
        onInputNumber={handleInputInteger}
        onResetInputNumber={resetInputInteger}
        onIncrement={increment}
        onDecrement={decrement}
        onMultiply={multiply}
        onDivide={divide}
        labels={labels}
      />
    </SidenaviLayoutContainer>
  );
});

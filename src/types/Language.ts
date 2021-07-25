import { ValueType } from "../utility-types/ValueType";

/**
 * Language code
 */
export const LanguageCode = {
  "ja-JP": "ja-JP",
  "en-US": "en-US",
} as const;
/**
 * Language code type
 */
export type LanguageCodeType = ValueType<typeof LanguageCode>;

export const DefaultLanguage = LanguageCode["en-US"];

/**
 * Language name
 */
export const LanguageName = {
  [LanguageCode["ja-JP"]]: `日本語 (${LanguageCode["ja-JP"]})`,
  [LanguageCode["en-US"]]: `英語 (${LanguageCode["en-US"]})`,
} as const;
/**
 * Language name type
 */
export type LanguageNameType = ValueType<typeof LanguageName>;

/**
 * Language flag
 */
export const LanguageFlagEmoji = {
  [LanguageCode["ja-JP"]]: `🇯🇵`,
  [LanguageCode["en-US"]]: `🇺🇲`,
} as const;
/**
 * Language flag type
 */
export type LanguageFlagEmojiType = ValueType<typeof LanguageFlagEmoji>;

/**
 * Currency code
 */
export const CurrencyCode = {
  [LanguageCode["ja-JP"]]: "JPY",
  [LanguageCode["en-US"]]: "USD",
} as const;
/**
 * Currency code type
 */
export type CurrencyCodeType = ValueType<typeof CurrencyCode>;

/**
 * Language
 */
export const Language = {
  [LanguageCode["ja-JP"]]: {
    languageCode: LanguageCode["ja-JP"],
    languageName: LanguageName["ja-JP"],
    languageFlagEmoji: LanguageFlagEmoji["ja-JP"],
    currencyCode: CurrencyCode["ja-JP"],
  },
  [LanguageCode["en-US"]]: {
    languageCode: LanguageCode["en-US"],
    languageName: LanguageName["en-US"],
    languageFlagEmoji: LanguageFlagEmoji["en-US"],
    currencyCode: CurrencyCode["en-US"],
  },
};
/**
 * Language type
 */
export type LanguageType = ValueType<typeof Language>;

/**
 * Converting from language code string to language type
 * @param languageCode LanguageType
 */
export const convertToLanguageType = (languageCode?: string): LanguageType => {
  // If language code is not specified, set default language
  if (!languageCode) {
    return Language[DefaultLanguage];
  }
  // If the language code is specified but undefined, set the default language
  const isExistLanguageCode = (() => {
    const codes = Object.keys(Language).filter(
      (key: string) => languageCode === key
    );
    return codes && 1 <= codes.length;
  })();
  if (!isExistLanguageCode) {
    return Language[DefaultLanguage];
  }
  return Language[languageCode as LanguageCodeType];
};

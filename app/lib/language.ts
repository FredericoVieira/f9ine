export const LANGUAGES = {
  EN: "en",
  PT: "pt",
};

export type LanguageType = keyof typeof LANGUAGES;

export const handleLanguageChange = (language: LanguageType) =>
  language === LANGUAGES.EN ? LANGUAGES.PT : LANGUAGES.EN;

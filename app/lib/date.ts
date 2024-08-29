import { LANGUAGES, LanguageType } from "./language";

const { EN } = LANGUAGES;

export const formatDate = (date: string, language = EN as LanguageType) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(language, options);
};

export const formatStartEndDate = (
  startDate: string,
  endDate: string | null
) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  const startDateFormatted = new Date(startDate).toLocaleDateString(
    EN,
    options
  );

  const endDateFormatted = endDate
    ? new Date(endDate).toLocaleDateString(EN, options)
    : "Current";

  return `${startDateFormatted} / ${endDateFormatted}`;
};

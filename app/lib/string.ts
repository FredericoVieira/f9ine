export const formatTitle = (title: string) =>
  `${title.charAt(0).toUpperCase()}${title.slice(1)}`.replace(/-/g, " ");

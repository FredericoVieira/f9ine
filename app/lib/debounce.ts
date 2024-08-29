type DebouncedFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
): DebouncedFunction<T> => {
  let timer: NodeJS.Timeout | undefined;
  return function (...args: Parameters<T>) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

export const delayForDemo = <T>(promise: Promise<T>) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => promise);
};

export const getPage = (pages: object[], name: string) => {
    return pages.find((x: object) => x.toString().includes(name));
  };
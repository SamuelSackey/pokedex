export const getIdFromUrl = (url) => {
  const match = url?.match(/\/(\d+)\/$/);
  return match ? match[1] : null;
};

export const capitalize = (string) =>
  string?.charAt(0).toUpperCase() + string?.slice(1);

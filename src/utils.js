export const getPublicUrl = url => `${process.env.PUBLIC_URL}${url}`;

export const getDeclensions = (count, str, endStr) => {
  switch (count) {
    case count === 1:
      return `${count} ${str} ${endStr}`;
    case count > 1 && count < 5:
      return `${count} ${str}а ${endStr}`;
    default:
      return `${count} ${str}ов ${endStr}`;
  }
};

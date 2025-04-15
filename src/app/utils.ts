export const randomId = (length = 16) => {
  const alphabet = "qwertyuiopasdfghjklzxcvbnm0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  return result;
};

export const dayInMiliseconds = 1000 * 60 * 60 * 24;

export const weekIndexToDate = (weekIndex: number) => {
  return new Date((weekIndex + 3 / 7) * (dayInMiliseconds * 7));
};

export const dateToWeekIndex = (date: Date) => {
  return Math.floor(
    (date.getTime() - dayInMiliseconds * 3) / dayInMiliseconds / 7
  );
};

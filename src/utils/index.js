export const handleAvatar = (fullName) => {
  const nameSplitted = fullName.split(' ');
  return nameSplitted.map((i, index) =>
    index > 1 ? false : i.charAt(0).toUpperCase()
  );
};

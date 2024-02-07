export function splitPath(path: string) {
  return path.split("/").filter((part) => part !== "");
}

export function capitalizeWords(str: string) {
  const words = str.split(" ");
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalizedWords.join(" ");
}

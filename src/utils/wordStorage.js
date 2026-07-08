const STORAGE_KEY = "words";

export function getWords() {
  const words = localStorage.getItem(STORAGE_KEY);

  return words ? JSON.parse(words) : [];
}


export function addWord(word) {
  const words = getWords();

  words.push(word);

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(words)
  );
}
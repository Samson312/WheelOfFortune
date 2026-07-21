const STORAGE_KEY = "words";

export function getWords() {
  const words = localStorage.getItem(STORAGE_KEY);

  return words ? JSON.parse(words) : [];
}


export function addWord(word) {
  const words = getWords();

  words.push({
        id: Math.floor(Math.random() * 1000000),
            ...word
        }
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(words)
    );
}

export function deleteWord(id)
{
    const words = getWords();

    const filteredWords = words.filter(word => word.id !== id);

    localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(filteredWords)
    );
}
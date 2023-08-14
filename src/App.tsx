import { useCallback, useEffect, useState } from "react";

import portuguese_words from './words/pt-br-words.json';
import french_words from './words/fr-eu-words.json';
import english_words from './words/en-us-words.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import LanguageSelector from "./LanguageSelector";

const languageData: {
  en: {
      word: string;
      tips: string[];
  }[];
  fr: {
      word: string;
      tips: string[];
  }[];
  "pt-BR": {
      word: string;
      tips: string[];
  }[];
} = {
  en: english_words,
  fr: french_words,
  "pt-BR": portuguese_words,
};


const App = () => {

const [currentLanguage, setCurrentLanguage] = useState<string>('en');

const getWord = useCallback(() => {
  const words = languageData[currentLanguage as keyof typeof languageData];
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}, [currentLanguage]);

const [wordToGuess, setWordToGuess] = useState(getWord());
const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

const handleLanguageChange = useCallback((language: string) => {
    setCurrentLanguage(language);
}, []);

useEffect(() => {
  setWordToGuess(getWord());
  setGuessedLetters([]); // Reset guessed letters
}, [getWord]);

const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.word.includes(letter))

const isLoser = incorrectLetters.length >= 6;

const isWinner = wordToGuess.word
.split("")
.every(letter => guessedLetters.includes(letter))

const addGuessedLetter = useCallback((key: string) => {
  if(guessedLetters.includes(key) || isLoser || isWinner) return

  setGuessedLetters(currentLetters => [...currentLetters, key])
}, [guessedLetters, isLoser, isWinner])

useEffect(()=> {
  const handler = (e:KeyboardEvent) => {
  const key = e.key;

  if (!key.match(/^[a-z]$/)) return

  e.preventDefault();
  addGuessedLetter(key)
  }

  document.addEventListener('keypress', handler);

  return () => {
    document.removeEventListener('keypress', handler)
  }
}, [guessedLetters]);

useEffect(() => {
  const handler = (e:KeyboardEvent) => {
    const key = e.key;
  
    if (key !== 'Enter') return

    e.preventDefault()
    setGuessedLetters([])  
    setWordToGuess(getWord())
    }
  
    document.addEventListener('keypress', handler);
  
    return () => {
      document.removeEventListener('keypress', handler)
    }
}, [])

  return (
   <div
    style={{maxWidth: '800px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    margin: '0 auto',
    alignItems: 'center'}}
   >
    <LanguageSelector
    onLanguageChange={handleLanguageChange}
    />
      <div style={{ fontSize: "1rem", textAlign: "center" }}>
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </div>
    {wordToGuess.tips.map((tips) => {
      return (
        <div style={{fontSize: '1rem', textAlign: 'center'}}>{tips}</div>
      )
    })}
   <HangmanDrawing numberOfGuesses={incorrectLetters.length}/>
   <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess.word}/>
   <div style={{alignSelf: 'stretch'}}>
      <Keyboard 
      disabled={ isWinner || isLoser}
      activeLetters={guessedLetters.filter(letter => 
        wordToGuess.word.includes(letter)
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
        />
        <div style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '1rem'}}>
          <p>Developed with ❤️ by <a href="https://github.com/devpedrofurquim" target="_blank" style={{textDecoration: 'none', color: 'blue'}}>Pedro Furquim</a> using React and Typescript</p>
        </div>
   </div>
   </div>
  )
}

export default App
import { useState } from 'react';

export const ThemedButton = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: isDarkTheme ? 'black' : 'lightgray',
        color: isDarkTheme ? 'white' : 'black'
      }} >
      Themed Button
    </button>
  )
}
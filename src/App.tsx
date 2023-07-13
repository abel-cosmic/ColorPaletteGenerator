import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import CustomButton from "./components/CustomButton";  
import CustomToast from "./components/CustomToast";

const App: React.FC = () => {

  const minCardCount = 4;
  const maxCardCount = 5;

  const [colors, setColors] = useState<string[]>(generatePalette());

  const [toastHex, setToastHex] = useState<string>("");

  function generatePalette(): string[] {
    const cardCount = Math.floor(Math.random() * (maxCardCount - minCardCount + 1)) + minCardCount;
    const palette: string[] = [];
    for (let i = 0; i < cardCount; i++) {
      const randomColor = generateRandomColor();
      palette.push(randomColor);
    }
    return palette;
  }
  function generateRandomColor(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }
  const addCard = () => {
    const randomColor = generateRandomColor();
    setColors(prevColors => [...prevColors, randomColor]);
  }
  const showToast = (hex: string) => {
    setToastHex(hex); 

    setTimeout(() => {
      setToastHex("");
    }, 1000);
  }
  const handleCardClick = (color: string) => {
    showToast(color);
    navigator.clipboard.writeText(color);
  }
  const copyFullPalette = () => {
    const hexCodes = colors.join(' ');
    navigator.clipboard.writeText(hexCodes);
    setColors(colors);     
    showToast(`${colors.length} cards copied!`); 
  }
  
  useEffect(() => {
    const onSpacePress = () => {
      setColors(generatePalette());
    }
    
    const copyFullPalette = () => {
      const hexCodes = colors.join(' ');
      navigator.clipboard.writeText(hexCodes);
      
      showToast(`${colors.length} cards copied!`); 
    }
    
    window.addEventListener('keyup', (e) => {
      if (e.key === ' ') {
        onSpacePress(); 
      } 
  
      if (e.key === 'c' || e.key === 'C') {
        copyFullPalette(); 
      }
    });
  }, [colors]);
  
  return (
    <div className="flex flex-col items-center gap-8">
     {toastHex && <CustomToast hexValue={toastHex} />}
      <div className="flex flex-col items-center text-2xl font-extrabold mt-32">
        Color palette generator
      </div>
      <div className="flex flex-row flex-wrap justify-between px-16">
      <Card 
        colors={colors}
        onClick={(color) => handleCardClick(color)}  
      />
      </div>

      <div className="flex flex-row items-center justify-center gap-10 my-10 max-md:flex-col">

        <CustomButton
          text="Generate palette"
          padding="1rem 6rem"
          onClick={() => setColors(generatePalette())}
          backgroundColor="#088395" 
        />

        <CustomButton
          text="Add Card"
          padding="1rem 6rem"
          onClick={addCard}
          backgroundColor="#f6f8fc"
          textColor="#202124"
        />

      </div>
      <div className="flex felx-row">
        Or just press the "Spacebar" to generate new palettes.
      </div>
      <div className="px-8 py-4 bg-white rounded-full mb-10">
        Click to copy individual color . Press "C" to copy palette
      </div>
    </div>
  );
}

export default App;
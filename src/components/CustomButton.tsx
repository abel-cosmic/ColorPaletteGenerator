import React from 'react';

interface CustomButtonProps {
  padding: string;
  text: string;
  onClick?: () => void;
  textColor?: string;
  backgroundColor: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ padding, text, onClick, textColor ,backgroundColor}) => {
  return (
    <button
      style={{
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: '0.3rem',
        color: textColor || '#ffffff',
        fontWeight: 700,
        cursor: 'pointer',
      }}
      onClick={onClick}
      className='hover:opacity-70 active:opacity-100'
    >
      {text}
    </button>
  );
};

export default CustomButton;

// CustomToast.tsx
import { useState, useEffect } from 'react';

interface ToastProps { 
  hexValue: string; 
}

const CustomToast: React.FC<ToastProps> = ({hexValue}) => {

  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if(!show) {
    return null; 
  }

  return (
    <div 
      className="fixed top-4 left-1/2 -translate-x-1/2 p-4 rounded-full bg-gray-900 text-white text-center max-md:text-[0.6rem]"  
      style={{width: '40rem'}}
    >
      Color {hexValue.toLocaleUpperCase()} copied to your clipboard
    </div> 
  );
}

export default CustomToast;
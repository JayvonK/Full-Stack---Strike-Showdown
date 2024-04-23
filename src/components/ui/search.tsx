import { useState,  } from 'react';
import { Button } from 'flowbite-react';
import SearchIcon from "../../../public/images/Search.png";
import Image from 'next/image';
const ToggleButtonInput = () => {
  const [isInput, setIsInput] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const handleButtonClick = () => {
    setIsInput(true);
  };

  const handleInputBlur = () => {
    setIsInput(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsInput(false);
      // You can also handle the submission of the input value here
      console.log("Input Value:", inputValue);
    }
  };

  return isInput ? (
    <form className=' flex jusitfy-start  mr-24'>
    <input
    className='px-5 hoverInput text-3xl '
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      onBlur={handleInputBlur}
      onKeyPress={handleInputKeyPress}
      placeholder='Search For User'
      autoFocus // Automatically focus the input when it appears
    />
    <Image
      alt="search Icon"
      className="wrapper flex item-end h-15 w-15 pt-2"
      style={{position:'fixed',marginLeft:'25%'}}
      src={SearchIcon}
     
    />
    </form>
    
  ) : (

    <div  className=" transitionInput !border-transparent hover:!border-transparent !bg-transparent jura hover:brightness-125 hover:cursor-pointer hover:!text-orange-500 text-white item-center "
    onClick={handleButtonClick}
  >
     <img
      src={SearchIcon.src}
      alt="Search Icon"
      className=" object-cover h-15 w-15 hover:cursor-pointer  mb-1"></img><h1>Search</h1></div>
    
  );
};

export default ToggleButtonInput;

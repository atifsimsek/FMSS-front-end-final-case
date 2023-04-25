import { useTheme } from '../store/redux-helpers/themeHelper';

interface Props {
  width: string;
  height: string;
  transform: string;
}

const Svg = ({ width, height, transform }: Props) => {
  const theme = useTheme();
  return (
    <svg
      style={{ transform: `rotate(${transform}deg)`, transition: 'all' }}
      width="50"
      height="50"
      viewBox="0 0 43 205"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 0H31V25.5H3V0Z" fill="#C4C4C4"></path>
      <rect y="25.5" width="34" height="10" fill="#C4C4C4"></rect>
      <rect x="5" y="35.5" width="27" height="163" fill="#C4C4C4"></rect>
      <rect x="5" y="35.5" width="13.5" height="163" fill="#D9DCDE"></rect>
      <rect x="2.5" y="124.5" width="5" height="74" fill="black"></rect>
      <rect x="16" y="124.5" width="5" height="74" fill="black"></rect>
      <rect x="5.5" y="198.5" width="26" height="6" fill="black"></rect>
      <rect x="29.5" y="124.5" width="5" height="74" fill="black"></rect>
      <rect
        x="4"
        y="89"
        width="29"
        height="28"
        fill={theme === 'dark' ? 'gray' : 'black'}
      ></rect>
      <rect
        x="33"
        y="92"
        width="8"
        height="22"
        fill={theme === 'dark' ? 'gray' : 'black'}
      ></rect>
      <rect x="1" y="57" width="4" height="9" fill="black"></rect>
      <rect x="1" y="42" width="4" height="15" fill="#C4C4C4"></rect>
      <rect y="35.5" width="34" height="1" fill="black"></rect>
      <path d="M0.5 35.5H15.25L9 42H0.5V35.5Z" fill="black"></path>
      <rect
        x="41"
        y="82.5"
        width="2"
        height="22"
        fill={theme === 'dark' ? 'gray' : 'black'}
      ></rect>
    </svg>
  );
};

export default Svg;

import { ButtonHTMLAttributes } from "react"

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes <HTMLButtonElement> {
    variant?: ButtonVariant,
    size: 'md' | 'lg',
    isLoading?: boolean,
    fullwidth?: boolean
}


const Button: React.FC<ButtonProps> = ({children, variant= 'primary', size= 'lg', fullwidth = false, isLoading = false, className='', ...rest}) => {

    const baseStyling = 'font-medium focus:outline-none transition-colors duration-200 cursor-pointer'
    
    const variantStyling = {
      primary: 'bg-nature-green text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md',
      secondary: 'bg-gray-700 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 rounded-r-md'
    }

    const sizeStyling = {
      'md': 'px-4 py-2.5 text-base',
      'lg': 'px-8 py-3 text-lg',
    };

    const widthSTyling = fullwidth ? 'w-full' : '';

  const buttonStyling = ` ${baseStyling} ${variantStyling[variant]} ${sizeStyling[size]} ${widthSTyling} ${className} `


  return (
    <button className={buttonStyling} {...rest}>
      { children }
    </button>
  )
}

export default Button
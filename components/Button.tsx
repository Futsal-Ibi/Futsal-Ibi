import { StaticImageData } from "next/image";
import Image from "next/image";

type ButtonProps = {
    type: 'button'|'submit';
    title: string;
    icon?: StaticImageData;
    variant: 'btn_white_text'
}

const Button = ({type, title, icon, variant} : ButtonProps) => {
  return (
    <button
    className={`flexCenter gap-3 rounded-full border ${variant}`}
        type={type}
    >
        {
            icon && <Image 
                src={icon}
                alt={variant}
                width={30}
                height={30}
            />
        }
        Instagram
    </button>
  )
}

export default Button
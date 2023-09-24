import React, { FC } from 'react';
import { StyleButton } from './Styles/Button.styled';

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    text: string;
    type?: 'submit' | 'button';
    disabled?: boolean;
    width?: string;
    height?: string;
    color?: string;
    fontWeight?: string | number;
    background?: string;
    ariaLable?: string;
    role?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const { text, type, disabled, color, fontWeight, background, width, height, ariaLable, role, onClick } = props;

    return (
        <StyleButton
            $color={color}
            $fontWeight={fontWeight}
            $bg={background}
            $width={width}
            $height={height}
            $disabled={disabled}
            type={type}
            aria-label={ariaLable}
            role={role}
            disabled={disabled}
            onClick={onClick}
        >
            {text}
        </StyleButton>
    );
};

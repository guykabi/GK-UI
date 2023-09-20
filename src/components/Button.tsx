import React, { FC } from 'react';

interface IButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    background?: string;
    color?: string;
}

const Button: FC<IButtonProps> = (props: IButtonProps) => {
    const { children, background, color } = props;
    return <button style={{ background: `${background}`, color: `${color}` }}>{children}</button>;
};

export default Button;

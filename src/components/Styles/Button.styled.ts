import styled from 'styled-components';

export const StyleButton = styled.button<{
    $color?: string;
    $bg?: string;
    $width?: string;
    $height?: string;
    $fontWeight?: string | number;
    $disabled?: boolean;
}>`
    background-color: ${(props) => props.$bg || '#b4b4b4'}; /* Green background color */
    color: ${(props) => props.$color || 'black'};
    font-weight: ${(props) => props.$fontWeight || '300'};
    min-width: max-content;
    min-height: max-content;
    max-width: 300px;
    max-height: 70px;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    margin: 0 auto;
    margin-top: 2px;
    padding: 12px 24px; /* Padding around the text */
    font-size: 18px; /* Font size */
    border: none; /* Remove the default button border */
    border-radius: 4px; /* Rounded corners */
    cursor: pointer; /* Show a pointer cursor on hover */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow */
    transition: background-color 0.3s ease, transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05); /* Scale the button on hover */
    }

    ${(props) =>
        !props.$disabled &&
        `&:active {
        transform: scale(0.95); /* Shrink the button when clicked */
        opacity: 0.7;
    }`}
`;

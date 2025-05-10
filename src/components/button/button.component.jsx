import React from 'react'
import { BaseButton, SecondaryButton, WelcomeButton } from './button.styles';
export const BUTTON_TYPES={
    baseButton : 'baseButton',
    secondaryButton : 'secondaryButton',
    welcomeButton : 'welcomeButton',
}
const getButton = (buttonType = BUTTON_TYPES.baseButton) =>{
    return {
        [BUTTON_TYPES.baseButton] : BaseButton,
        [BUTTON_TYPES.secondaryButton] : SecondaryButton,
        [BUTTON_TYPES.welcomeButton] : WelcomeButton,
    }[buttonType]
}
const CustomStyledButton= ({buttonType , ...props})=> {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...props}/>;
};
export default CustomStyledButton;

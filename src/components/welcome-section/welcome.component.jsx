import React from 'react'
import { ImageContainer, StyledImage, WelcomeContainer, WelcomeMessageContainer, WelcomeMessageSubTitle, WelcomeMessageTitle } from './welcome.styles'
import CustomStyledButton, { BUTTON_TYPES } from '../button/button.component'

export default function Welcome() {
  return (
    <WelcomeContainer>
        <WelcomeMessageContainer>
            <WelcomeMessageTitle>
                Deine Karriere an einem Ort
            </WelcomeMessageTitle>
            <WelcomeMessageSubTitle>
            Get clear steps & skill plans from your AI Career Sherpa. Automate your job search with our AI.
            </WelcomeMessageSubTitle>
            <CustomStyledButton buttonType={BUTTON_TYPES.welcomeButton}>
                Start 7-days trial
            </CustomStyledButton>
        </WelcomeMessageContainer>
        <ImageContainer>
            <StyledImage src='https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg?semt=ais_hybrid&w=740' alt=''/>
        </ImageContainer>
    </WelcomeContainer>
  )
}

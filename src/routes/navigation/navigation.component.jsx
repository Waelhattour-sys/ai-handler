import React from 'react'
import {  StyledLinksContainer, StyledLogoContainer, StyledNav, StyledTitle } from './navigation.styles'
import { Outlet } from 'react-router-dom'
import { ReactComponent as AppIcon } from '../../assets/app-logo.svg'
import CustomStyledButton, { BUTTON_TYPES } from '../../components/button/button.component'
export default function Navigation() {
  return (
    <div>
        <StyledNav>
              <StyledLogoContainer to='/'>
                <AppIcon/>
                <StyledTitle>App Name</StyledTitle>
              </StyledLogoContainer>
              <StyledLinksContainer>
                <CustomStyledButton buttonType={BUTTON_TYPES.baseButton}>
                  Sign In
                </CustomStyledButton>
                <CustomStyledButton buttonType={BUTTON_TYPES.secondaryButton}>
                  Start free trial 7 days
                </CustomStyledButton>
              </StyledLinksContainer>
        </StyledNav>
        <Outlet/>
    </div>
  )
}

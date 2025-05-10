import React from 'react'
import { CompaniesContainer, CompaniesNamesContainer, CompanyName } from './companies.styles'
import { WelcomeMessageSubTitle } from '../welcome-section/welcome.styles'

export default function Companies() {
  return (
    <CompaniesContainer>
        <WelcomeMessageSubTitle>
        Become attractive to top companies worldwide
        </WelcomeMessageSubTitle>
        <CompaniesNamesContainer>
            <CompanyName>TESLA</CompanyName>
            <CompanyName>GOOGLE</CompanyName>
            <CompanyName>AIRBUS</CompanyName>
            <CompanyName>ZALANDO</CompanyName>
        </CompaniesNamesContainer>
    </CompaniesContainer>
  )
}

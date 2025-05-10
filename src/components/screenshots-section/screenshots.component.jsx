import React from 'react'
import { ScreenshotsContainer, ScreenshotsHeader, ScreenshotsTitle, ScreenshotsubTitle, TwoByTwoGrid } from './screenshots.styles'
import ScreenshotCard from '../screenshot-card/sereenshotCard.component'
import CustomStyledButton, { BUTTON_TYPES } from '../button/button.component'
export default function Screenshots() {
  return (
    <ScreenshotsContainer>
        <ScreenshotsHeader>
      <ScreenshotsTitle>Deine Karriere an einem Ort</ScreenshotsTitle>
      <ScreenshotsubTitle>
        
        Get personalized guidance and tools to accelerate your career growth
      </ScreenshotsubTitle>
      </ScreenshotsHeader>
      <TwoByTwoGrid>
        <ScreenshotCard/>
        <ScreenshotCard/>

        <ScreenshotCard/>

        <ScreenshotCard/>

      </TwoByTwoGrid>
      <CustomStyledButton buttonType={BUTTON_TYPES.welcomeButton}>
        Start 7 Days free trial
      </CustomStyledButton>
    </ScreenshotsContainer>
  )
}

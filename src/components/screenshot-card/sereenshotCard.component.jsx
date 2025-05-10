import React from 'react'
import { ScreenshotCardContainer, ScreenshotCardHeader, ScreenshotCardImage, ScreenshotCardSubTitle, ScreenshotCardsGrid, ScreenshotCrdTitle } from './screenshotCard.styles'

export default function ScreenshotCard() {
  return (
    <ScreenshotCardsGrid>
        <ScreenshotCardContainer>
            <ScreenshotCardImage src='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/271702922/original/b8ba02f93f62dae4dcbabba299052593a826db5e/create-app-screenshots-for-app-store-play-store-within-24hr.png' alt=''/>
            <ScreenshotCardHeader>
                <ScreenshotCrdTitle>
                    AI Career Sherpa
                </ScreenshotCrdTitle>
                <ScreenshotCardSubTitle>
                Get personalized career guidance from your AI assistant


                </ScreenshotCardSubTitle>
            </ScreenshotCardHeader>
        </ScreenshotCardContainer>
    </ScreenshotCardsGrid>
  )
}

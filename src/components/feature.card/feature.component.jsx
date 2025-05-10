import React from 'react'
import { FeatureCardContainer, FeatureCardHeader, FeatureCardSubTitle, FeatureCardsGrid, FeatureCrdTitle, IconCircle } from './feature.styles'
import { SiTradingview } from "react-icons/si";

export default function FeatureCard({icon ,title , subTitle}) {
  return (
    <FeatureCardsGrid>
    <FeatureCardContainer>
        <IconCircle>
            <SiTradingview />
        </IconCircle>
        <FeatureCardHeader>
            <FeatureCrdTitle>
            AI Career Planning

            </FeatureCrdTitle>
            <FeatureCardSubTitle>
            Get personalized career roadmaps and skill development plans. Our AI analyzes market trends and your profile to guide your professional growth.
                </FeatureCardSubTitle>
        </FeatureCardHeader>
    </FeatureCardContainer>
    </FeatureCardsGrid>
  )
}

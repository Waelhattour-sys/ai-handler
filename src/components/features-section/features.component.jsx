import React from "react";
import {
  FeatureSubTitle,
  FeaturesContainer,
  FeaturesHeader,
  FeatursTitle,
  TwoByThreeGrid,
} from "./features.styles";
import FeatureCard from "../feature.card/feature.component";

export default function Features() {
  return (
    <FeaturesContainer>
        <FeaturesHeader>
      <FeatursTitle>Deine Karriere an einem Ort</FeatursTitle>
      <FeatureSubTitle>
        
        Get personalized guidance and tools to accelerate your career growth
      </FeatureSubTitle>
      </FeaturesHeader>
      <TwoByThreeGrid>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
        <FeatureCard/>
      </TwoByThreeGrid>
    </FeaturesContainer>
  );
}

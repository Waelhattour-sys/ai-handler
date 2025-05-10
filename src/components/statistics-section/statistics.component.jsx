import React from 'react'
import { StatisticSampleContainer, StatisticsContainer, StatisticsSubTitle, StatisticsTitle } from './statistics.styles'

export default function Statistics() {
  return (
        <StatisticsContainer>
            <StatisticSampleContainer>
                <StatisticsTitle>
                    7.5M+ 
                </StatisticsTitle>
                <StatisticsSubTitle>
                Professionals Actively Seeking New Opportunities
                </StatisticsSubTitle>
            </StatisticSampleContainer>
        <StatisticSampleContainer>
        <StatisticsTitle>
                65% 
            </StatisticsTitle>
            <StatisticsSubTitle>
            Of the Workforce Seeking a More Fulfilling Career with my AI for a reson
            </StatisticsSubTitle>
        </StatisticSampleContainer>
        <StatisticSampleContainer>
        <StatisticsTitle>
                500+ 
            </StatisticsTitle>
            <StatisticsSubTitle>
            Curated Job Listings on WunderJob
            </StatisticsSubTitle>
        </StatisticSampleContainer>
        <StatisticSampleContainer>
        <StatisticsTitle>
                AI 
            </StatisticsTitle>
            <StatisticsSubTitle>
            AI-Powered Career Tools to Guide Your Journey   
            </StatisticsSubTitle>
        </StatisticSampleContainer>
    </StatisticsContainer>
  )
}

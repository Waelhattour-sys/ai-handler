import React from "react";
import { HomeContainer } from "./home.styles";
import Welcome from "../../components/welcome-section/welcome.component";
import Companies from "../../components/companies-message/companies.component";
import Statistics from "../../components/statistics-section/statistics.component";
import Features from "../../components/features-section/features.component";
import Screenshots from "../../components/screenshots-section/screenshots.component";

export default function Home() {
  return (
    <div>
      <HomeContainer>
        <Welcome />
        <Companies />
      </HomeContainer>
      <Statistics />
      <Features />
      <Screenshots />
    </div>
  );
}

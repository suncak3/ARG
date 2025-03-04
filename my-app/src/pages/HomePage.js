import React from "react";

import Slider from "../components/Slider";
import ToolsList from "../components/ToolsList";
import AboutCompany from "../components/AboutCompany";
import PartnersList from "../components/PartnersList";

function HomePage() {
    return (
        <>
            <Slider />
            <ToolsList />
            <AboutCompany />
            <PartnersList />
        </>
    );
}

export default HomePage;

import React, { useState, useEffect, useMemo } from "react";
import { FeatureFilter } from './FilterSelector/featureFilter.jsx'
import webAppsData from '../../../util/webAppsData.json'
import mobileAppsData from '../../../util/mobileAppsData.json'
import cloudData from '../../../util/cloudData.json'
import proficiencies from '../../../util/proficiencies.json'
import { WideCardsContainer } from "../../Cards/CardContainers/wideCardContainer.jsx";
import { DynamicCardContainer } from "../../Cards/CardContainers/dynamicCardContainer.jsx";
import { GalleryContainer } from "../../Cards/CardContainers/slidingGalaryContainer.jsx";
import { AnimationGrid } from "../../AnimatedGrid/GridAnimation.jsx";
import { AboutContentContainer } from "../../Cards/CardContainers/about.jsx";

export const PropogateTemplates = ({ secondaryNavSelection }) => {
    // console.log("Received secondaryNavSelection in PropogateTemplates:", secondaryNavSelection);
    const [cardDataObject, setCardDataObject] = useState([]);
    const [secondaryNav, setSecondaryNav] = useState(secondaryNavSelection);
    let CardContainerComponent;

    // Check which tab the nav bar has selected, then call your API for that specific data
    // This is where the data is sorted for each selector
    useEffect(() => {
        switch (secondaryNavSelection) {
            case 'WebApps':
                setCardDataObject(webAppsData);
                break;
            case 'MobileApps':
                setCardDataObject(mobileAppsData);
                break;
            case 'Components': // change to Proficiencies
                setCardDataObject(proficiencies);
                break;
            case 'Cloud':
                setCardDataObject(cloudData);
                break;
            default:
                break;
        }
    }, [secondaryNavSelection]);

    useEffect(() => {
        console.log("cardDataObject updated:", cardDataObject);
    }, [cardDataObject]);

    // This switch will pick which type of card to render based off the navigator
    switch (secondaryNavSelection) {
        case 'WebApps':
            CardContainerComponent = AnimationGrid;
            break;
        case 'MobileApps':
            CardContainerComponent = DynamicCardContainer;
            break;
        case 'Components':
            CardContainerComponent = GalleryContainer;
            break;
        case 'Cloud':
            CardContainerComponent = WideCardsContainer;
            break;
        default:
            CardContainerComponent = null;
            break;
    }

    return (
        <>
        <FeatureFilter cardData={cardDataObject} secondaryNavSelection={secondaryNavSelection} CardContainerComponent={CardContainerComponent}/>
        </>
    );
};

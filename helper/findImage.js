
import imgHomeDesktop from '../assets/home/background-home-desktop.jpg'
import imgHomeTablet from '../assets/home/background-home-tablet.jpg'
import imgHomeMobile from '../assets/home/background-home-mobile.jpg'

import imgDestinationDesktop from '../assets/destination/background-destination-desktop.jpg'
import imgDestinationTablet from '../assets/destination/background-destination-tablet.jpg'
import imgDestinationMobile from '../assets/destination/background-destination-mobile.jpg'

import imgCaseDesktop from '../assets/crew/background-crew-desktop.jpg'
import imgCaseTablet from '../assets/crew/background-crew-tablet.jpg'
import imgCaseMobile from '../assets/crew/background-crew-mobile.jpg'

import imgTechDesktop from '../assets/technology/background-technology-desktop.jpg'
import imgTechTablet from '../assets/technology/background-technology-tablet.jpg'
import imgTechMobile from '../assets/technology/background-technology-mobile.jpg'


export function findImage({ deviceSize, router }) {
    if (deviceSize.width < '769' && router.pathname === '/') {
        return imgHomeMobile
    } else if
        (deviceSize.width > '768' && deviceSize.width <= '1024' && router.pathname === '/') {
        return imgHomeTablet
    }
    else if (deviceSize.width < '769' && router.pathname === '/destination') {
        return imgDestinationMobile
    }
    else if
        (deviceSize.width > '768' && deviceSize.width <= '1024' && router.pathname === '/destination') {
        return imgDestinationTablet
    }
    else if
        (deviceSize.width > '1024' && router.pathname === '/destination') {
        return imgDestinationDesktop
    }
    else if (deviceSize.width < '769' && router.pathname === '/crew') {
        return imgCaseMobile
    }
    else if
        (deviceSize.width > '768' && deviceSize.width <= '1024' && router.pathname === '/crew') {
        return imgCaseTablet
    }
    else if
        (deviceSize.width > '1024' && router.pathname === '/crew') {
        return imgCaseDesktop
    }
    else if (deviceSize.width < '769' && router.pathname === '/technology') {
        return imgTechMobile
    }
    else if
        (deviceSize.width > '768' && deviceSize.width <= '1024' && router.pathname === '/technology') {
        return imgTechTablet
    }
    else if
        (deviceSize.width > '1024' && router.pathname === '/technology') {
        return imgTechDesktop
    }

    else {
        return imgHomeDesktop
    }
}

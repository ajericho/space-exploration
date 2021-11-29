import { useState } from 'react'
import { NavBarStyles, GlassContainer, ToggleButton } from "./NavbarStyles";

import Image from 'next/image'

import logo from '../../public/assets/shared/logo.svg'
import menu from '../../public/assets/shared/icon-hamburger.svg'
import close from '../../public/assets/shared/icon-close.svg'

import HorizontalList from "./HorizontalList";


const pages = [
    {
        'label': 'Home',
        'number': '00',
        'path': '/'
    },
    {
        'label': 'Desintation',
        'number': '01',
        'path': '/destination'
    },
    {
        'label': 'Crew',
        'number': '02',
        'path': '/crew'
    },
    {
        'label': 'Technology',
        'number': '03',
        'path': '/technology'
    },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <NavBarStyles >
            <div className="image-container">
                <Image src={logo} width={48} height={48} layout='fixed' objectFit='cover' />
            </div>
            <div className="line"></div>
            <ToggleButton>
                <button
                    className={isOpen ? 'hide' : 'show'}
                    onClick={() => setIsOpen(true)}>
                    <Image src={menu} width={19} height={19} layout='fixed' objectFit='cover' />
                </button>
            </ToggleButton>
            <ToggleButton>
                <button
                    className={isOpen ? 'show' : 'hide'}
                    onClick={() => setIsOpen(false)}>
                    <Image src={close} width={19} height={19} layout='fixed' objectFit='cover' />
                </button>

            </ToggleButton>

            <GlassContainer show={isOpen} >
                <HorizontalList links={pages} />
            </GlassContainer>
        </NavBarStyles>

    )
}

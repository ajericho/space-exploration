import { NavBarStyles, GlassContainer } from "./Styles/NavbarStyles";

import Image from 'next/image'

import logo from '../assets/shared/logo.svg'
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

    return (

        <NavBarStyles >
            <Image src={logo} width={48} height={48} layout='fixed' objectFit='cover' />
            <div className="line"></div>
            <GlassContainer>
                 <HorizontalList links={pages} />
            </GlassContainer>
        </NavBarStyles>

    )
}

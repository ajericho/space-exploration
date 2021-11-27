import Link from 'next/link'
import { useRouter } from 'next/router'
import { HorizontalListStyle } from './Styles/HorizontalListStyles'


export default function HorizontalList({ links }) {
    const router = useRouter();


    return (

        <HorizontalListStyle>
            <ul>
                {links.map(p => (
                    <li key={p.id}>
                        <Link href={p.path}>
                            <a 
                                className={router.pathname == p.path ? "active nav-text " : "nav-text"}>
                              
                                <span className="number">{p.number ? p.number : ''}</span>
                                {p.label}
                            </a>
                        </Link>
                    </li>
                ))}

            </ul>
        </HorizontalListStyle>

    )
}

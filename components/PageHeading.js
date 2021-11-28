import { PageHeadingStyle } from "./Styles/PageHeadingStyles";


export default function PageHeading({pageNumber, pageTitle}) {

    return (

        <PageHeadingStyle>
            <span className="number">{pageNumber}</span>
            <span>{pageTitle}</span>
        </PageHeadingStyle>

    )
}

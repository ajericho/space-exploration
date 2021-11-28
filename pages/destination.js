import PageHeading from "../components/PageHeading";
import { Layout, PageContent } from '../components/Styles/Wrapper';

import Image from 'next/image'

import data from '../data.json';


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getStaticProps() {

  const destinations = data.destinations;

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      destinations,
    },
  }
}


export default function Destination({destinations}) {

  console.log(destinations);
  return (

    <Layout >
      <PageHeading
        pageNumber='01'
        pageTitle='Pick your destination'
      />
{destinations.map(planet => (
    <PageContent>
    <div class="">
      <Image 
        src={`/${planet.images.png}`}
        alt={planet.name}
        width={275}
        height={275} />

    </div>
    <div>
    <h1 class="">
      {planet.name}
    </h1>
    <p>{planet.description}</p>
    <h5>{planet.distance}</h5>
    <h5>{planet.travel}</h5>
    </div>
  </PageContent>
))}


    </Layout>

  )
}



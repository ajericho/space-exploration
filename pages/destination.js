import PageHeading from "../components/PageHeading";
import { Layout, PageContent } from '../components/Styles/Wrapper';

import Image from 'next/image'
import { imageLoader } from "../helper/imageLoader";

import data from '../data.json';



export default function Destination() {
  const destinations = data.destinations;

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
              loader={imageLoader}
              src={planet.images.webp}
              alt={planet.name}
              width={445}
              height={445}
            />

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



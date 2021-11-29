import { Fragment } from "react";
import PageHeading from "../components/PageHeading";
import { Layout, PageContent } from '../components/Styles/Wrapper';
import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../helper/imageLoader";

import data from '../data.json';
import { PlanetStats, PlanetTabs } from "../components/Styles/DestinationStyles";



export default function Destination() {
  const destinations = data.destinations;

  return (

    <Layout >
      <PageHeading
        pageNumber='01'
        pageTitle='Pick your destination'
      />
      <Tab.Group>
        <PageContent>
          <div></div>
          <div>
            <PlanetTabs>
              <Tab.List>
                {destinations.map(planet => (
                  <Tab as={Fragment}>
                    {({ selected }) => (
                      <a
                        className={
                          selected ? 'active nav-text' : 'nav-text'
                        }
                      >
                        {planet.name}
                      </a>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </PlanetTabs>
          </div>
        </PageContent>

        <Tab.Panels>

          {destinations.map(planet => (
            <Tab.Panel>
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
                  <PlanetStats>
                    <div class="distance">
                      <h5 className="sub-heading-b">
                          Avg. Distance
                        </h5>
                      <h5 className="white">{planet.distance}</h5>
                    </div>
                    <div class="distance">
                    <h5 className="sub-heading-b">
                          Est. Time Travel
                        </h5>
                    <h5 className="white">{planet.travel}</h5>
                    </div>

             
                  </PlanetStats>
                </div>

              </PageContent>
            </Tab.Panel>
          ))}




        </Tab.Panels>
      </Tab.Group>



    </Layout>

  )
}



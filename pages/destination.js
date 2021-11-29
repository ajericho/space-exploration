import { Fragment } from "react";
import PageHeading from "../components/PageHeading/PageHeading";
import { Layout, PageContent } from '../components/PageStyles/LayoutStyles';
import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../helper/imageLoader";

import data from '../data.json';
import { PlanetStats, PlanetTabs } from "../components/PageStyles/DestinationStyles";
import { useWindowSize } from '../helper/useWindowSize'



export default function Destination() {
  const destinations = data.destinations;
  const device = useWindowSize();

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
                  <Tab as={Fragment}  key={planet.name}>
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
            <Tab.Panel key={planet.name}>
              <PageContent>

                <div >
                  <Image
                    loader={imageLoader}
                    src={planet.images.webp}
                    alt={planet.name}
                    width={
                      device.width >= 1024 ?
                      455 : 
                      177
                    }
                    height={
                      device.width >= 1024 ? 
                      445 : 170
                    }
                    layout={'intrinsic'}
                  />

                </div>
                <div>
                  <h1 >
                    {planet.name}
                  </h1>
                  <p>{planet.description}</p>
                  <PlanetStats>
                    <div className="distance">
                      <h5 className="sub-heading-b">
                        Avg. Distance
                      </h5>
                      <h5 className="white">{planet.distance}</h5>
                    </div>
                    <div className="distance">
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



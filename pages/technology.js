import { Fragment } from "react";
import PageHeading from "../components/PageHeading";
import { Layout, PageContent } from '../components/Styles/LayoutStyles';
import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../helper/imageLoader";

import data from '../data.json';
import { TechnologyContainer, CrewTabs, CrewImage, CrewDetails } from "../components/Styles/TechnologyStyles";



export default function Technology() {
  const tech = data.technology;

  return (

    <Layout >
      <PageHeading
        pageNumber='03'
        pageTitle='Space Launch 101'
      />

      <Tab.Group>
        <TechnologyContainer>
        <CrewTabs className='controls'>
            <Tab.List>
              {tech.map(menuItem => (
                <Tab as={Fragment}>
                  {({ selected }) => (
         
                    <button
                      className={
                        selected ? 'active slider-dot' : 'slider-dot'
                      }
                    >
                     <h4>1</h4>
                      <span className="sr-only">{menuItem.name}</span>

                    </button>
             
                  )}
                </Tab>
              ))}
            </Tab.List>
          </CrewTabs>
          <div>
            <Tab.Panels>

              {tech.map(item => (
                <Tab.Panel>
                  <PageContent>



                    <CrewDetails>
                      <h5 className="sub-heading-b">The Terminology...</h5>
                      <h3 >
                        {item.name}
                      </h3>
                      <p>{item.description}</p>

                    </CrewDetails>
                    <CrewImage>
                      <Image
                        loader={imageLoader}
                        src={item.images.portrait}
                        alt={item.name}
                        width={600}
                        height={700}
                        layout={'responsive'}
                        objectFit={'contain'}
                      />

                    </CrewImage>
                  </PageContent>
                </Tab.Panel>
              ))}


            </Tab.Panels>
          </div>
        </TechnologyContainer>



        <PageContent>
          <div>

          </div>
          <div>
          </div>
        </PageContent>
      </Tab.Group>



    </Layout>

  )
}



import { Fragment } from "react";
import PageHeading from "../components/PageHeading";
import { Layout, PageContent } from '../components/Styles/LayoutStyles';
import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../helper/imageLoader";

import data from '../data.json';
import { CrewTabs, CrewImage, CrewDetails } from "../components/Styles/CrewStyles";



export default function Crew() {
  const crew = data.crew;

  return (

    <Layout >
      <PageHeading
        pageNumber='02'
        pageTitle='Meet your crew'
      />
      <Tab.Group>

        <Tab.Panels>

          {crew.map(member => (
            <Tab.Panel>
              <PageContent>
                <CrewDetails flex="2" >
                  <h4>{member.role}</h4>
                  <h3 >
                    {member.name}
                  </h3>
                  <p>{member.bio}</p>

                </CrewDetails>
                <CrewImage flex="1">
                  <Image
                    loader={imageLoader}
                    src={member.images.webp}
                    alt={member.name}
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
        <PageContent>
          <div>
            <CrewTabs>
              <Tab.List>
                {crew.map(member => (
                  <Tab as={Fragment} key={member.name}>
                    {({ selected }) => (
                      <button
                        className={
                          selected ? 'active slider-dot' : 'slider-dot'
                        }
                      >
                       
                        <span className="sr-only">{member.name}</span>
                      </button>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </CrewTabs>
          </div>
          <div>
          </div>
        </PageContent>
      </Tab.Group>



    </Layout>

  )
}



import { Fragment } from "react";
import PageHeading from "../components/PageHeading";
import { Layout, PageContent } from '../components/Styles/LayoutStyles';
import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../helper/imageLoader";
import { useWindowSize } from '../helper/useWindowSize';


import data from '../data.json';
import { TechnologyContainer, TechTabs, TechImage, TechDetails } from "../components/Styles/TechnologyStyles";



export default function Technology() {
  const tech = data.technology;
  const device = useWindowSize();

  return (

    <Layout >
      <PageHeading
        pageNumber='03'
        pageTitle='Space Launch 101'
      />

      <Tab.Group>
        
        <TechnologyContainer>
        <TechTabs className='controls'>
            <Tab.List>
              {tech.map((menuItem, menuIdx) => (
                <Tab as={Fragment}>
                  {({ selected }) => (
         
                    <button
                      className={
                        selected ? 'active slider-dot' : 'slider-dot'
                      }
                    >
                     <h4>{menuIdx + 1}</h4>
                      <span className="sr-only">{menuItem.name}</span>

                    </button>
             
                  )}
                </Tab>
              ))}
            </Tab.List>
          </TechTabs>
          <div>
            <Tab.Panels>

              {tech.map(item => (
                <Tab.Panel>
                  <PageContent>

                    <TechDetails>
                      <h5 className="sub-heading-b">The Terminology...</h5>
                      <h3 >
                        {item.name}
                      </h3>
                      <p>{item.description}</p>
                      {console.log(device)}

                    </TechDetails>
                    <TechImage>
                      <Image
                        loader={imageLoader}
                        src={ 
                          device.width >= 1024 ?
                          item.images.portrait : 
                          item.images.landscape 
                        }
                        alt={item.name}
                        width={512}
                        height={530}
                        layout={'responsive'}
                        objectFit={'contain'}
                      />

                    </TechImage>
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



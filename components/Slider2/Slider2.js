import { Fragment } from "react";
import { PageContent } from '../PageStyles/LayoutStyles';
import { SliderTabs } from "./Slider2Styles";
import { TechnologyContainer, TechImage, TechDetails } from "../PageStyles/TechnologyStyles";


import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../../helper/imageLoader";

import { useWindowSize } from '../../helper/useWindowSize';


export default function Slider1({tech}) {

  const device = useWindowSize()

  return (

    <Tab.Group>
        
    <TechnologyContainer>
    <SliderTabs className='controls'>
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
      </SliderTabs>
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
                    width={
                      device.width >= 1024 ?
                      512 : 
                      370
                      }
                    height={
                      device.width >= 1024 ?
                      530 : 
                      170
                    }
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




  )
}



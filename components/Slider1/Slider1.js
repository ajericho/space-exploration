import { useState, Fragment } from "react"

import { PageContent } from '../../components/PageStyles/LayoutStyles';
import { SliderTabs, CrewImage, CrewDetails } from "./Slider1Styles";

import { Tab } from '@headlessui/react'

import Image from 'next/image'
import { imageLoader } from "../../helper/imageLoader";


export default function Slider1({ crew }) {

    return (

        <Tab.Group>
            <Tab.Panels>

                {crew.map(member => (
                    <Tab.Panel key={member.name}>
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
                    <SliderTabs>
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
                    </SliderTabs>
                </div>
                <div>
                </div>
            </PageContent>
        </Tab.Group>


    )
}



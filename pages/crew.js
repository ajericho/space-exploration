import PageHeading from "../components/PageHeading/PageHeading";
import { Layout } from '../components/PageStyles/LayoutStyles';

import data from '../data.json';
import Slider1 from "../components/Slider1/Slider1";



export default function Crew() {
  const crew = data.crew;

  return (

    <Layout >
      <PageHeading
        pageNumber='02'
        pageTitle='Meet your crew'
      />

      <Slider1 crew={crew} />

    </Layout>

  )
}



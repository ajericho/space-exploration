
import PageHeading from "../components/PageHeading/PageHeading";
import { Layout, PageContent } from '../components/PageStyles/LayoutStyles';

import Slider2 from '../components/Slider2/Slider2'



import data from '../data.json';



export default function Technology() {
  const tech = data.technology;


  return (

    <Layout >
      <PageHeading
        pageNumber='03'
        pageTitle='Space Launch 101'
      />

      <Slider2 tech={tech} />

    </Layout>

  )
}



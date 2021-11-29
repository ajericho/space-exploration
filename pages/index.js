import { HomeHero } from "../components/Styles/HomeHeroStyles";
import { MainButton } from "../components/Styles/MainButton";
import { Layout } from "../components/Styles/LayoutStyles";

import Link from 'next/link'


export default function Home() {

  return (

    < >
      <Layout>
        <HomeHero>
          <div className="greeting">
            <h5>So you want to travel to</h5>
            <h1>Space</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore">
            <Link href="/destination">
              <MainButton>
                Explore
              </MainButton>
            </Link>
          </div>
        </HomeHero>
      </Layout>
      <footer>
      </footer>
    </>

  )
}

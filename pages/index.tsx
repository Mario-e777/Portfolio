/* Next stuff */
import Head from 'next/head';

/* Modules */
import styled from 'styled-components';

/* Components */
import Layout from '../components/layout';
import Header from '../components/header';
import HeroSection from '../components/HeroSection';
/* import Counter from '../features/counter/Counter'; */

/* MDX */
/* import Solid from '../posts/solid.mdx'; */
/* import COMPONENTS from '../utils/mdx/mdx-components'; */

const PageLayout = styled.div`
`;

export default function Home() {
  return <Layout>
    <Header />
    <Head>
      <title>HOME!!!</title>
    </Head>
    <HeroSection/>
    {/* <Counter/> */}
    {/* <Solid components={COMPONENTS} /> */}

  </Layout>;
};

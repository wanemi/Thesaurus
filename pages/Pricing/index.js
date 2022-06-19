import Head from "next/head";
import Header from "../../components/Header/Header";
import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import PriceHeader from "../../components/PriceComp/PriceHeader/PriceHeader";
import Plans from "../../components/PriceComp/Plans/Plans";
import Cta from "../../components/PriceComp/CTA/Cta";

const Pricing = () => {
  return (
    <Fragment>
      <Header />
      <Head>
        <title>Pricing - Thesaurus</title>
        <meta
          name="description"
          content="Thesaurus is the best platform to hone your tech skills at affordable prices"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <PriceHeader />
        <Plans />
        <Cta />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Pricing;

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PortfolioDetailsArea from '../../components/portfolio-details/portfolio-details-area';
import SEO from '../../components/seo';
import portfolioList from '../../data/portfolio-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';



const PortfoliosDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [portfolio, setPortfolio] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setPortfolio(portfolioList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Portfolio Details'} />
      <HeaderOne />
      <main>
        <PortfolioDetailsArea item={portfolio} />
      </main>
      <FooterOne />
    </>
  );
};

export default PortfoliosDetails;
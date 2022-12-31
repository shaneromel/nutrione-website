import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../../components/seo';
import ServiceDetailsArea from '../../components/service-details/service-details-area';
import ServicesList from '../../data/services-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';


const ServicesDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [service, setService] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setService(ServicesList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Service Details'} />
      <HeaderOne />
      <main>
        <ServiceDetailsArea item={service} />
      </main>
      <FooterOne />
    </>
  );
};

export default ServicesDetails;
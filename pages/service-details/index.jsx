import SEO from '../../components/seo';
import ServiceDetailsMain from '../../components/service-details';

const index = () => {
  return (
    <>
    <SEO pageTitle={'Service Details'} />
      <ServiceDetailsMain />
    </>
  );
};

export default index;
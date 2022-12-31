import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import PortfolioMain from '../components/portfolio';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio'} />
      <PortfolioMain />
    </Wrapper>
  );
};

export default index;
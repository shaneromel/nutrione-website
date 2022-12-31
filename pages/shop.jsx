import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ShopMain from '../components/shop';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Shop'} />
      <ShopMain />
    </Wrapper>
  );
};

export default index;
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import HomeFourMain from '../components/home-4';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home Four'} />
      <HomeFourMain />
    </Wrapper>
  );
};

export default index;
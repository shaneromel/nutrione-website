import AboutMain from '../components/about/aboutmain';
import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'About'} />
      <AboutMain/>
    </Wrapper>
  );
};

export default index;
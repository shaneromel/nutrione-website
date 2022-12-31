import SEO from '../components/seo';
import Wrapper from '../layout/wrapper';
import ContactMain from '../components/contact';

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Contact'} />
      <ContactMain/>
    </Wrapper>
  );
};

export default index;
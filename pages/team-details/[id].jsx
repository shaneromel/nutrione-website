import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SEO from '../../components/seo';
import TeamDetailsArea from '../../components/team-details/team-details-area';
import TeamList from '../../data/team-data';
import FooterOne from '../../layout/footers/footer';
import HeaderOne from '../../layout/headers/header';

const TeamsDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const [team, setTeam] = useState({});


  useEffect(() => {
    if (!id) (<h1>Loading...</h1>)

    else (setTeam(TeamList.find(item => item.id == id)))

    return () => {

    };
  }, [id]);

  return (
    <>
      <SEO pageTitle={'Team Details'} />
      <HeaderOne />
      <main>
        <TeamDetailsArea item={team} />
      </main>
      <FooterOne />
    </>
  );
};

export default TeamsDetails;
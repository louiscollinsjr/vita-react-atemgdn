import React from 'react';

import AtemMaestroVideoHero from '../../components/atem-maestro-video-hero.component';
import AtemMaestroAwesomations from '../../components/atem-maestro-awesomations.component';
import FWImageSection from '../../components/fw-image-section.component';
import AtemProjects from '../../components/atem-projects.components';
import AtemNRTW from '../../components/atem-nrtw.component';
import AtemPerfectFitForm from '../../components/atem-perfect-fit-form.component';


  const Home: React.FC = () => {
  
    return (
      <div>
        <AtemMaestroVideoHero />
        <AtemMaestroAwesomations />
        <FWImageSection />
        <AtemProjects />
        <AtemPerfectFitForm />
        <AtemNRTW />
      </div>
    );
  };
  
  export default Home;
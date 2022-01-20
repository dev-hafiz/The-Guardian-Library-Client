import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import PreFooter from '../PreFooter/PreFooter';
import Services from '../Services/Services';
import TeacherTalk from '../TeacherTalk/TeacherTalk';
import TopBanner from '../TopBanner/TopBanner';
import TopCard from '../TopCard/TopCard';

const Home = () => {
     return (
          <div>
              <TopBar/>
              <TopBanner/>
              <TopCard/>
              <Services/>
              <TeacherTalk/>
              <PreFooter/>
          </div>
     );
};

export default Home;
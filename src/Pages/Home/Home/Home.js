import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import Services from '../Services/Services';
import TeacherTalk from '../TeacherTalk/TeacherTalk';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
              <TopBar/>
              <TopBanner/>
              <Services/>
              <TeacherTalk/>
          </div>
     );
};

export default Home;
import React from 'react';
import TopBar from '../../Shared/TopBar/TopBar';
import BottomFooter from '../BottomFooter/BottomFooter';
import Footer from '../Footer/Footer';
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
              <Footer/>
              <BottomFooter/>
          </div>
     );
};

export default Home;
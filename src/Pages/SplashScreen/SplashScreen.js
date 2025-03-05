import React from 'react';
import CustomSplash from '../../components/Custom-Splash/CustomSplash';

const SplashScreen = () => {
  return (
    <CustomSplash
    Img={require('../../assets/logo.png')} 
    bigHeading="Doctor Hunt"
    fontSize={25}
    />
  );
};

export default SplashScreen;

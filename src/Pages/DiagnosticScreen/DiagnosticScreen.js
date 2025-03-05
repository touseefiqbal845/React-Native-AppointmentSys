import React from 'react';
import CustomSplash from '../../components/Custom-Splash/CustomSplash';

const DiagnosticScreen = () => {
  return (
    <CustomSplash
    backIcon={require('../../assets/back-arrow.png')} 
    backText="Diagonstics Tests"
    onBackPress={() => console.log('Back pressed')}
    Img={require('../../assets/diagnostic.png')} 
    imgbackColor="#C6EFE5"
    bigHeading="You haven’t booked any tests yet"
    smallHeading="Get started with your first health checkup"
    fontSize={20}
    buttonText="Book Now"
    onButtonPress={() => console.log("")}
    backgroundColor="#C6EFE5"

    />
  );
};

export default DiagnosticScreen;

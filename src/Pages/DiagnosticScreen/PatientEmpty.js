import React from 'react';
import CustomSplash from '../../components/Custom-Splash/CustomSplash';

const PatientEmpty = () => {
  return (
    <CustomSplash
    backIcon={require('../../assets/back-arrow.png')} 
    backText="Patient Details"
    onBackPress={() => console.log('Back pressed')}
    Img={require('../../assets/patientCart.png')} 
    imgbackColor="#C6EFE5"
    bigHeading="Your cart is empty"
    fontSize={20}
    buttonText="Add Tests"
    onButtonPress={() => console.log("")}
    backgroundColor="#C6EFE5"

    />
  );
};

export default PatientEmpty;

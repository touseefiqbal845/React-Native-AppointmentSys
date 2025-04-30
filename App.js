import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import SplashScreen from "./src/Pages/SplashScreen/SplashScreen";
import AppNavigator from "./src/components/Navigation/AppNavigator";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <SafeAreaProvider>
      {isLoading ? <SplashScreen /> : <AppNavigator />}
    </SafeAreaProvider>
  );
};

export default App;

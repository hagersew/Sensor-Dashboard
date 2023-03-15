import { useContext, useEffect, useState } from 'react';
import { SensorsContext } from '../context/SensorsContext';
import SensorList from '../components/SensorList';
import { Switch } from 'antd';
export default function Sensors() {
  const { sensors = [] } = useContext(SensorsContext);
  const [isSensorConnected, setIsSensorConnected] = useState(false);

  const switchSensor = (checked: boolean) => {
    setIsSensorConnected(checked);
  };

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    if (darkTheme === true) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }

    setDarkTheme(JSON.parse(localStorage.getItem('DarkMode')!));
  }, [darkTheme]);

  const setDarkMode = (darkMode: boolean) => {
    setDarkTheme(darkMode);
    localStorage.setItem('DarkMode', darkMode.toString()!);
  };

  return (
    <main className="flex flex-col h-screen dark:bg-gray-700 dark:text-white">
      <h1 className="text-5xl font-thin text-center mt-6">Sensor Dashboard</h1>

      <div className="flex justify-end shadow-xl space-x-8 mt-10 mr-10">
        <div className="flex justify-items-center mb-4">
          <p className="font-thin mr-4">Show Connected Sensors</p>
          <Switch className="bg-zinc-500" onChange={switchSensor}></Switch>
        </div>
        <div className="flex justify-items-center mb-4">
          <p className="font-thin mr-4">Dark Mode</p>
          <Switch
            className="bg-zinc-500"
            checked={darkTheme}
            onClick={() => setDarkMode(!darkTheme)}
          ></Switch>
        </div>
      </div>

      <div className="ml-8 mt-8">
        <SensorList
          sensors={
            isSensorConnected ? sensors?.filter((s) => s?.connected) : sensors
          }
        />
      </div>
    </main>
  );
}

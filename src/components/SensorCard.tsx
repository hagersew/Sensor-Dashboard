import { Switch } from 'antd';
import { useContext, useEffect } from 'react';
import { SensorsContext } from '../context/SensorsContext';
import { Sensor } from '../types/Sensor';
import { weatherIcon } from './shared/utils/icons';

interface SensorCardProps {
  sensor: Sensor;
}
export default function SensorCard({ sensor }: SensorCardProps) {
  const { connectSensor, disconnectSensor } = useContext(SensorsContext);

  useEffect(() => {
    if (sensor.value == null) {
      return;
    }
  });

  const sensorSwitch = (checked: boolean) => {
    checked ? connectSensor(sensor?.id) : disconnectSensor(sensor?.id);
  };
  return (
    <div className="flex items-center justify-center h-full">
      <div className=" shadow-2xl p-6 rounded-2xl border-2 border-gray-50 w-8/12">
        <div className="flex flex-col">
          <div>
            <h2
              data-testid="sensorName"
              className="font-bold  text-center"
            >
              {sensor?.name}
            </h2>
          </div>
          <div className="my-6">
            <div className="flex flex-row space-x-4 items-center">
              <div id="icon">
                <span>{weatherIcon(sensor?.name)}</span>
              </div>
              <div id="temp">
                <h4 data-testid="sensorValue" className="text-4xl">
                  {sensor?.value || 0}
                </h4>
                <h4
                  data-testid="sensorUnit"
                  className="text-4xl"
                >
                  {sensor?.unit}
                </h4>
                <p className="text-xs "></p>
              </div>
            </div>
          </div>
          <div className="w-full place-items-end text-right border-t-2 border-gray-100 mt-2">
            <Switch
              data-testid="sensorSwitch"
              checked={sensor?.connected}
              defaultChecked={false}
              className="bg-slate-400 mt-2"
              onChange={sensorSwitch}
            ></Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

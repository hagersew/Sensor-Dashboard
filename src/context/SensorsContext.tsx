import { createContext, useState } from 'react';
import { Sensor } from '../types/Sensor';
import useWebSocket from 'react-use-websocket';

const url = process.env.WS_API || 'ws://localhost:5000';

interface ISensorsContext {
  sensors?: Sensor[];
  socketConnected: boolean;
  connectSensor: (sensorId: string) => void;
  disconnectSensor: (sensorId: string) => void;
}
export const SensorsContext = createContext<ISensorsContext>({
  socketConnected: false,
  connectSensor: () => null,
  disconnectSensor: () => null,
});

interface SensorsProviderProps {
  children: React.ReactNode;
}
export default function SensorsProvider({ children }: SensorsProviderProps) {
  const [socketConnected, setSocketConnected] = useState(false);
  const [sensors, setSensors] = useState<Sensor[]>([]);

  const { sendMessage } = useWebSocket(url, {
    onOpen: () => {
      setSocketConnected(true);
      console.info('WebSocket connection established.');
    },
    onClose: () => {
      setSocketConnected(false);
      console.info('WebSocket connection closed.');
    },
    onMessage: (e) => {
      let sensor: Sensor;
      sensor = JSON.parse(e?.data);

      setSensors((sensors) => {
        let _sensors = sensors;
        const currentSensor = sensors.findIndex((s) => s.id === sensor.id);
        if (currentSensor !== -1) {
          _sensors[currentSensor] = sensor;
        } else {
          _sensors = [...sensors, sensor];
        }
        return _sensors;
      });
    },
    reconnectAttempts: 10,
    reconnectInterval: 3000,
  });

  function connectSensor(id: string) {
    sendMessage(
      JSON.stringify({
        id,
        command: 'connect',
      })
    );
  }

  function disconnectSensor(id: string) {
    sendMessage(
      JSON.stringify({
        id,
        command: 'disconnect',
      })
    );
  }

  return (
    <SensorsContext.Provider
      value={{
        socketConnected,
        sensors: sensors,
        connectSensor,
        disconnectSensor,
      }}
    >
      {children}
    </SensorsContext.Provider>
  );
}

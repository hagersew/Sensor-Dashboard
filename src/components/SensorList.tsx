import { Sensor } from '../types/Sensor';
import SensorCard from './SensorCard';
import emptyState from '../assets/images/EmptyState.png';
interface SensorListProps {
  sensors: Sensor[];
}

export default function SensorList({ sensors }: SensorListProps) {
  return (
    <div>
      {sensors.length > 0 ? (
        <div className="grid grid-cols-3 gap-8 p-8">
          {sensors.map((sensor, id) => (
            <SensorCard key={id} sensor={sensor} />
          ))}
        </div>
      ) : (
        <div className="flex items-center flex-col">
          <img src={`${emptyState}`} alt="No Sensors Found" />
          <p className="text-2xl font-thin">
            No connected sensor found
          </p>
        </div>
      )}
    </div>
  );
}

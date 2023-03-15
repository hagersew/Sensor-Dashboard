import { SensorCard, SensorList } from '../index';
import { sensorData } from '../shared/utils/sampleData';

export default {
  title: 'Sensor/Card',
  component: SensorCard,
  parameters: {
  },
};
const Template = (args) => <SensorList sensors={sensorData.map((sensor,id)=>(sensor))} {...args} />;

export const SensorCardTemplate = Template.bind({});
import { fireEvent, render, screen } from '@testing-library/react';
import { SensorList } from '../index';
import { sensorData } from '../shared/utils/sampleData';

it('Should render SensorCard with Temperature values', () => {
  render(<SensorList sensors={sensorData} />);
  const turnSensorOn = screen.getByTestId('sensorSwitch');

  fireEvent.click(turnSensorOn);

  const sensorName = screen.getByTestId('sensorName');
  const sensorValue = screen.getByTestId('sensorValue');
  const sensorUnit = screen.getByTestId('sensorUnit');

  expect(sensorName).toHaveTextContent('Temperature');
  expect(sensorValue).toHaveTextContent('15.976');
  expect(sensorUnit).toHaveTextContent('°C');
});

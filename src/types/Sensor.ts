export interface Sensor {
  id: string;
  connected: boolean;
  unit: string;
  value: string | null;
  name: string;
}

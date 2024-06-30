import { Dayjs } from 'dayjs';

export default interface ToolLanguageResource {
  id: number;
  name: string;
  toolLanguageResourceId: number;
  positionId: number;
  displayOrder: number;
  from: Dayjs;
  to: Dayjs;
  description: string;
}

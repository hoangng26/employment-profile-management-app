import ToolLanguage from './ToolLanguage';

export default interface Position {
  id?: number;
  employeeId?: number;
  positionResourceId: number;
  displayOrder: number;
  toolLanguages: ToolLanguage[];
}

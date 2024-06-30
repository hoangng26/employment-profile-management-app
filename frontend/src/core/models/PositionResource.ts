import ToolLanguageResource from './ToolLanguageResource';

export default interface PositionResource {
  id: number;
  name: string;
  toolLanguageResources: ToolLanguageResource[];
}

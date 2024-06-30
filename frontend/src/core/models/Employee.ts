import Position from './Position';

export interface Employee {
  id: number;
  name: string;
  avatarUrl: string;
  positions: Position[];
}

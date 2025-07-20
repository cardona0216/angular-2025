export enum Color {
  red,
  yellow,
  blue,
  green,
}

export enum Creator {
  DC,
  Marvel,
}

export interface Hero {
  id: number;
  name: string;
  canFly: boolean;
  color: Color;
  creator: Creator;
}

export const ColorMap = {
  [Color.red]: '#E57373',
  [Color.yellow]: '#FFEB3B',
  [Color.blue]: '#64B5F6',
  [Color.green]: '#81C784',
  
};
type Color = `#${string}`;
type Coordinate = Record<number, number>;
type GraphType = 'raw' | 'expression' | 'evaluator';

type SerializableGraph = {
  color: Color;
  type: GraphType;
  data?: Coordinate[];
  expression?: string;
  evaluator?: string;
};
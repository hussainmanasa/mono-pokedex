export type CardProps = {
  name: string;
  height?: number;
  weight?: number;
  location?: string;
  images?: object;
  abilities?: [];
};

export type AbilityProp = {
  ability: {
    name: string;
    url: string;
  };
};

export enum Stages {
  suggestions = 'suggestions',
  planned = 'planned',
  inDevelopment = 'in-development',
  readyToWatch = 'ready-to-watch',
}

export type User = {
  id: number;
  name: string;
  mobile: string;
};

export type Suggestions = {
  id: number;
  votes: number;
  title: string;
  description?: string;
  hashtags: string[];
  stage: Stages;
  createdAt: string;
  user: User;
};

export enum ButtonSizes {
  xs,
  sm,
  lg,
  xlg,
}

export type Button = {
  icon?: JSX.Element;
  size?: ButtonSizes | undefined;
  variant?: string;
  label: string;
};

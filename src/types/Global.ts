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
  onClick?: CallableFunction
};

export type InputEvent = {
  target : {
    value: string,
    name: string
  },
}

export type LoginCredentials = {
  user: string,
  pass: string
}

export type AuthCheck = {
  isAuthenticated: Boolean,
  loading: Boolean
}

export type Course = {
  title: string,
  last_update: string,
  desc: string,
  tags: string[]
}
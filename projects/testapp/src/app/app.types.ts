// import { ControlConfig } from './modules/form/common/types';

export type ServerForm = {
  title?: string;
  controls: {
    [key: string]: any; // ControlConfig;
  };
};

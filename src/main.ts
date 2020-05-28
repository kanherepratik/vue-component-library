import { IValidation, IValidationRule } from '@/shared/interfaces';
import { VALIDATORS } from '@/shared/enum';
import * as components from './components';

const install = (Vue: any, options: any): void => {
  for (const component in components) {
    if ((components as any)[component]) {
      Vue.component((components as any)[component].name, (components as any)[component]);
    }
  }
};

export default { install, VALIDATORS };

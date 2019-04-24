import {InjectionToken} from '@angular/core';
import {IAppConfig} from './appConfig';

export const APP_CONFIG = new InjectionToken<IAppConfig>('ValueProvider');
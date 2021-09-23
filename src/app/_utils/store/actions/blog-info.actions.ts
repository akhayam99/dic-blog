import { createAction, props } from '@ngrx/store';

const prefix = '[blog-info] - ';

export const LoadVersionSuccess = createAction(prefix + 'LoadVersionSuccess', props<any>());
export const LoadVersionFailed = createAction(prefix + 'LoadVersionFailed', props<any>());

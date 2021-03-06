import { createAction, props } from '@ngrx/store';
import { VersionError, VersionResponse } from '../../services/api/info.service';

const prefix = '[blog-info] - ';

export const LoadVersionFailed = createAction(prefix + 'LoadVersionFailed', props<VersionError>());
export const LoadVersionSuccess = createAction(prefix + 'LoadVersionSuccess', props<VersionResponse>());

import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileIsReadonly = (state: StateSchema) => state.profile?.readonly;

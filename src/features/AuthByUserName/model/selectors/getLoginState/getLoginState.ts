import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';

export const getLoginState = (state: StateSchema) => state?.loginForm;

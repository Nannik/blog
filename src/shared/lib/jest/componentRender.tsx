import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { RenderWithRouterOptions, withRouter } from './withRouter';
import { withTranslation } from './withTranslation';

export interface ComponentRenderOptions extends RenderWithRouterOptions {}

export function componentRender(component: ReactNode, options?: ComponentRenderOptions) {
    return render(
        withRouter(withTranslation(component), Boolean(options) ? options : {}),
    );
}

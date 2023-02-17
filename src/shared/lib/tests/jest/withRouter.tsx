import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface RenderWithRouterOptions {
    route?: string
}

export function withRouter(component: ReactNode, options?: RenderWithRouterOptions) {
    const {
        route = '/',
    } = options;

    return (
        <MemoryRouter initialEntries={ [ route ] }>
            {component}
        </MemoryRouter>
    );
}

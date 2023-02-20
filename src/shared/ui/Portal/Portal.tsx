import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode
    container?: Element
}

const Portal = (props: PortalProps) => {
    const {
        children,
        container = document.body,
    } = props;

    return createPortal(children, container);
};

export {
    Portal,
};

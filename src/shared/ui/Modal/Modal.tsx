import React, {
    MouseEvent, MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '..';

export interface ModalProps {
    children: ReactNode
    isOpen: boolean
    className?: string
    onClose?: () => void
    lazy?: boolean
}

const ANIMATION_DELAY = 150;

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose,
        lazy,
    } = props;

    const [ isClosing, setIsClosing ] = useState(false);
    const [ isMounted, setIsMounted ] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [ onClose ]);

    const onContentClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    }, []);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            handleClose();
        }
    }, [ handleClose ]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [ isOpen, onKeyDown ]);

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [ isOpen ]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={ classNames(cls.Modal, mods, [ className ]) }>
                <div className={ cls.overlay } onClick={ handleClose }>
                    <div className={ cls.content } onClick={ onContentClick }>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export {
    Modal,
};

import React, {
    MouseEvent, ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from '@/shared/lib';
import cls from './Modal.module.scss';
import { Portal } from '..';

interface ModalProps {
    className?: string;
    isOpen: boolean;
    onClose?: () => void;
    children: ReactNode;
}

const ANIMATION_DELAY = 150;

const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen = false,
        onClose,
    } = props;

    const [ isClosing, setIsClosing ] = useState(false);
    const timerRef = useRef < ReturnType < typeof setTimeout >>(null);

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

    const mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [ isOpen, onKeyDown ]);

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

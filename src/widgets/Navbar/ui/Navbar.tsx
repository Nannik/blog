import { classNames } from '@/shared/lib';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

function Navbar({ className }: NavbarProps) {
    return (
        <div className={ classNames(cls.navbar, {}, [ className ]) } />
    );
}

export {
    Navbar,
};

import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import s from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => (
    <div className={classNames(s.NotFoundPage, {}, [className])}>
        Страница не найдена
    </div>
);

import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';
import { Button } from 'shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {

    const reloadPageHandler = () => {
        // eslint-disable-next-line
        location.reload()
    };

    return (
        <div className={classNames(s.PageError, {}, [className])}>
            <p>Произошла непредвиденная ошибка!</p>
            <Button className={s.btn} onClick={reloadPageHandler}>
                Перезагрузить страницу
            </Button>
        </div>
    );
};

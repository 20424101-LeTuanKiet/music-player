import classNames from 'classnames/bind';
import styles from './Player.module.scss';

const cx = classNames.bind(styles);

export default function Player() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-volumn')}></div>
                <div className={cx('header-theme')}></div>
            </div>
            <div className={cx('body')}></div>
            <div className={cx('footer')}></div>
        </div>
    );
}

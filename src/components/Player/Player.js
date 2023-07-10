import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBackward,
    faForward,
    faMoon,
    faPlay,
    faVolumeHigh,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Player.module.scss';

import nkcm from '../../media/images/nhatKyCuaMe.jpg';

const cx = classNames.bind(styles);

export default function Player() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-volumn')}>
                    <div className={cx('circle', 'volumn-control')}>
                        <FontAwesomeIcon icon={faVolumeHigh} />
                    </div>
                    <input
                        className={cx('volumn')}
                        type="range"
                        min="0"
                        max="100"
                    />
                </div>
                <div className={cx('header-theme')}>
                    <div className={cx('circle')}>
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <h2 className={cx('music-name')}>Nhật ký của mẹ</h2>
                <img className={cx('music-avatar')} src={nkcm} alt="" />
            </div>
            <div className={cx('control')}>
                <div className={cx('time-duration')}>
                    <div className={cx('timer')}>
                        <input
                            className={cx('timer-input')}
                            type="range"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div className={cx('time')}>
                        <div className={cx('time-start')}>0:00</div>
                        <div className={cx('time-end')}>3:45</div>
                    </div>
                </div>

                <div className={cx('control-btn')}>
                    <FontAwesomeIcon icon={faBackward} />
                    <FontAwesomeIcon icon={faPlay} />
                    {/* <FontAwesomeIcon icon={faPause} /> */}
                    <FontAwesomeIcon icon={faForward} />
                </div>
            </div>
        </div>
    );
}

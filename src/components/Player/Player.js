import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBackward,
    faForward,
    faMoon,
    faPause,
    faPlay,
    faVolumeHigh,
    faVolumeLow,
    faVolumeOff,
    faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';

import useMusicPlayer from '../../hooks/useMusicPlayer';
import styles from './Player.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function Player() {
    const {
        playMusicDefault,
        isPlaying,
        currentMusicName,
        currentMusicAvatar,
        currentPlaying,
        togglePlay,
        playPreviousMusic,
        playNextMusic,
    } = useMusicPlayer();

    const [volume, setVolume] = useState(0.7);

    const handlevolume = (e) => {
        setVolume(e.target.value / 100);
    };

    useEffect(() => {
        currentPlaying.volume = volume;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volume]);

    useEffect(() => {
        playMusicDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    currentPlaying.onended = function () {
        playNextMusic();
    };

    const iconVolume = () => {
        if (volume === 0) {
            return <FontAwesomeIcon icon={faVolumeXmark} />;
        }
        if (volume >= 0.7) {
            return <FontAwesomeIcon icon={faVolumeHigh} />;
        }
        if (volume >= 0.3) {
            return <FontAwesomeIcon icon={faVolumeLow} />;
        }
        return <FontAwesomeIcon icon={faVolumeOff} />;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-volume')}>
                    <div className={cx('volume-icon', 'volume-control')}>
                        {iconVolume()}
                    </div>
                    <input
                        onChange={handlevolume}
                        className={cx('volume')}
                        type="range"
                        value={volume * 100}
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
                <h2 className={cx('music-name')}>
                    {currentMusicName || 'Mời bạn chọn bài hát'}
                </h2>
                <div className={cx('avatar')}>
                    <img
                        className={cx(
                            'music-avatar',
                            isPlaying ? 'rotate' : '',
                        )}
                        src={currentMusicAvatar || ''}
                        alt={currentMusicName || ''}
                    />
                    <div className={cx('music-avatar-circle')}></div>
                </div>
            </div>
            <div className={cx('control')}>
                {/* <div className={cx('time-duration')}>
                    <div className={cx('timer')}>
                        <input
                            className={cx('timer-input')}
                            type="range"
                            min="0"
                            max="100"
                        />
                    </div>
                    <div className={cx('time')}>
                        <div className={cx('time-current')}>0:00</div>
                        <div className={cx('time-end')}>
                            {currentPlaying.duration}
                        </div>
                    </div>
                </div> */}

                <div className={cx('control-btn')}>
                    <FontAwesomeIcon
                        icon={faBackward}
                        onClick={playPreviousMusic}
                        disabled={!currentMusicName}
                    />
                    <button onClick={togglePlay} disabled={!currentMusicName}>
                        {isPlaying ? (
                            <FontAwesomeIcon icon={faPause} />
                        ) : (
                            <FontAwesomeIcon icon={faPlay} />
                        )}
                    </button>
                    {/* <FontAwesomeIcon icon={faPause} /> */}
                    <FontAwesomeIcon
                        icon={faForward}
                        onClick={playNextMusic}
                        disabled={!currentMusicName}
                    />
                </div>
            </div>
        </div>
    );
}

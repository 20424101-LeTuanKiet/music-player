import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBackward,
    faCloudMoon,
    faCloudSun,
    faForward,
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

function convertSecondsToMinutes(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    if (s < 10) {
        return m + ':0' + s;
    }
    return m + ':' + s;
}

export default function Player() {
    const {
        playMusicDefault,
        isPlaying,
        currentMusicName,
        currentSinger,
        currentMusicAvatar,
        currentPlaying,
        togglePlay,
        playPreviousMusic,
        playNextMusic,
    } = useMusicPlayer();

    const [volume, setVolume] = useState(70);

    const [duration, setDuradion] = useState('');
    const [currentTime, setCurrentTime] = useState('0:00');
    const [rangeEnd, setRangeEnd] = useState(0);
    const [rangeCurrent, setRangeCurrent] = useState(0);

    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const root = document.querySelector(':root');

        const setVariables = (vars) =>
            Object.entries(vars).forEach((v) =>
                root.style.setProperty(v[0], v[1]),
            );

        function myFunction(v) {
            root.style.removeProperty(v);
        }

        const removeVariables = (vars) => vars.forEach(myFunction);

        if (darkMode === true) {
            const myVariables = {
                '--background-music-list': '#1F1F1F',
                '--background-music-hover': '#1a1a1a',

                '--background-music-player': '#252525',

                '--color-text': '#e3e3e3',
                '--color-btn': '#e3e3e3',
                '--color-range-input': '#646464',
                '--color-icon': '#252525',
                '--color-background-icon': '#efefef',
                '--color-line': '#0c0c0c',
            };
            setVariables(myVariables);
        } else {
            const myVariables = [
                '--background-music-list',
                '--background-music-hover',

                '--background-music-player',

                '--color-text',
                '--color-btn',
                '--color-range-input',
                '--color-icon',
                '--color-background-icon',
                '--color-line',
            ];
            removeVariables(myVariables);
        }
    }, [darkMode]);

    const handleVolume = (e) => {
        setVolume(e.target.value);
    };

    const handleChange = (e) => {
        currentPlaying.currentTime = e.target.value;
    };

    useEffect(() => {
        currentPlaying.volume = volume / 100;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [volume]);

    useEffect(() => {
        playMusicDefault();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Event when audio ended
    currentPlaying.onended = function () {
        playNextMusic();
    };

    // Event when audio play
    currentPlaying.oncanplay = function () {
        const duration = convertSecondsToMinutes(currentPlaying.duration);
        setDuradion(duration);
        setRangeEnd(currentPlaying.duration);
    };

    // Event when audio playing
    currentPlaying.ontimeupdate = function () {
        const current = convertSecondsToMinutes(currentPlaying.currentTime);
        setCurrentTime(current);
        setRangeCurrent(currentPlaying.currentTime);
    };

    const iconVolume = () => {
        if (volume >= 70) {
            return <FontAwesomeIcon icon={faVolumeHigh} />;
        }
        if (volume >= 30) {
            return <FontAwesomeIcon icon={faVolumeLow} />;
        }
        if (volume > 0) {
            return <FontAwesomeIcon icon={faVolumeOff} />;
        }
        return <FontAwesomeIcon icon={faVolumeXmark} />;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('header-volume')}>
                    <div className={cx('volume-icon', 'volume-control')}>
                        {iconVolume()}
                    </div>
                    <input
                        onChange={handleVolume}
                        className={cx('volume')}
                        type="range"
                        value={volume}
                        min="0"
                        max="100"
                    />
                </div>
                <div className={cx('header-theme')}>
                    <div className={cx('circle')} onClick={handleDarkMode}>
                        {darkMode ? (
                            <FontAwesomeIcon icon={faCloudSun} />
                        ) : (
                            <FontAwesomeIcon icon={faCloudMoon} />
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('content')}>
                <h2 className={cx('music-name')}>
                    {currentMusicName || 'Mời bạn chọn bài hát'}
                </h2>
                <i className={cx('singer')}>{currentSinger}</i>
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
                <div className={cx('time-duration')}>
                    <div className={cx('timer')}>
                        <input
                            value={rangeCurrent}
                            onChange={handleChange}
                            className={cx('timer-input')}
                            type="range"
                            min="0"
                            max={rangeEnd}
                        />
                    </div>
                    <div className={cx('time')}>
                        <div className={cx('time-current')}>{currentTime}</div>
                        <div className={cx('song')}>{currentMusicName}</div>
                        <div className={cx('time-end')}>{duration}</div>
                    </div>
                </div>

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

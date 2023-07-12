import classNames from 'classnames/bind';
import styles from './Music.module.scss';

import useMusicPlayer from '../../../hooks/useMusicPlayer';

const cx = classNames.bind(styles);

export default function Music() {
    const { musicList, playMusic } = useMusicPlayer();

    return (
        <div className={cx('wrapper')}>
            {musicList.length > 0 ? (
                musicList.map((music, index) => (
                    <div
                        className={cx('music')}
                        key={index}
                        onClick={() => {
                            playMusic(music.id - 1);
                        }}
                    >
                        <div className={cx('music-id')}>{music.id}</div>
                        <div className={cx('music-avatar')}>
                            <img src={music.image} alt={music.name} />
                        </div>
                        <div className={cx('music-description')}>
                            <div className={cx('music-description-title')}>
                                {music.name}
                            </div>
                            <div className={cx('music-description-singer')}>
                                {music.singer}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={cx('alert')}>
                    Bài hát bạn tìm hiện không có.
                </div>
            )}
        </div>
    );
}

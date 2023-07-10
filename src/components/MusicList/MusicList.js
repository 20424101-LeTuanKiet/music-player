import classNames from 'classnames/bind';
import styles from './MusicList.module.scss';
import MusicList from './Music';

const cx = classNames.bind(styles);

export default function Music() {
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('music-list')}>Music Player</h1>
            <input
                className={cx('music-list-search-input')}
                placeholder="Tìm kiếm bằng tên bài hát..."
            />
            <MusicList />
        </div>
    );
}

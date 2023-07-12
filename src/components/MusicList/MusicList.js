import classNames from 'classnames/bind';

import styles from './MusicList.module.scss';
import MusicList from './Music';
import useMusicPlayer from '../../hooks/useMusicPlayer';
import useDebounce from '../../hooks/useDebounce';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

export default function Music() {
    const { setSearchText } = useMusicPlayer();

    const [text, setText] = useState('');

    const debouncedValue = useDebounce(text, 500);

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchText('');
            return;
        }

        setSearchText(debouncedValue);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const hanldInputChange = (e) => {
        const searchValueInput = e.target.value;
        if (!searchValueInput.startsWith(' ')) {
            setText(e.target.value);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('music-list')}>Playlist</h1>
            <input
                value={text}
                onChange={hanldInputChange}
                className={cx('music-list-search-input')}
                placeholder="Tìm kiếm bằng tên bài hát..."
            />
            <MusicList />
        </div>
    );
}

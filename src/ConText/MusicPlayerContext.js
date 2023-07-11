import { createContext, useState } from 'react';

import mp3_NhatKyCuaMe from '../asset/media/NhatKyCuaMe.mp3';
import img_NhatKyCuaMe from '../asset/images/nhatKyCuaMe.jpg';
import mp3_TruocKhiEmTonTai from '../asset/media/TruocKhiEmTonTai.mp3';
import img_TruocKhiEmTonTai from '../asset/images/TruocKhiEmTonTai.jpg';
import mp3_Gio from '../asset/media/Gio.mp3';
import img_Gio from '../asset/images/Gio.jpg';

const MusicPlayerContext = createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
    const [state, setState] = useState({
        audioPlayer: new Audio(),
        musicList: [
            {
                id: 1,
                name: 'Nhật ký của mẹ',
                singer: 'Hiền Thục',
                file: mp3_NhatKyCuaMe,
                image: img_NhatKyCuaMe,
            },
            {
                id: 2,
                name: 'Trước khi em tồn tại',
                singer: 'Việt Anh',
                file: mp3_TruocKhiEmTonTai,
                image: img_TruocKhiEmTonTai,
            },
            {
                id: 3,
                name: 'Gió',
                singer: 'Jank',
                file: mp3_Gio,
                image: img_Gio,
            },
        ],
        currentMusicIndex: null,
        isPlaying: false,
    });
    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };

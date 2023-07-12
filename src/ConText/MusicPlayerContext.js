import { createContext, useState } from 'react';

import mp3_NhatKyCuaMe from '../asset/media/NhatKyCuaMe.mp3';
import img_NhatKyCuaMe from '../asset/images/nhatKyCuaMe.jpg';
import mp3_TruocKhiEmTonTai from '../asset/media/TruocKhiEmTonTai.mp3';
import img_TruocKhiEmTonTai from '../asset/images/TruocKhiEmTonTai.jpg';
import mp3_Gio from '../asset/media/Gio.mp3';
import img_Gio from '../asset/images/Gio.jpg';
import mp3_DiVangNhatNhoa from '../asset/media/DiVangNhatNhoa.mp3';
import img_DiVangNhatNhoa from '../asset/images/DiVangNhatNhoa.jpg';
import mp3_Sorry from '../asset/media/Sorry.mp3';
import img_Sorry from '../asset/images/Sorry.jpg';
import mp3_DuaEmVeNha from '../asset/media/DuaEmVeNha.mp3';
import img_DuaEmVeNha from '../asset/images/DuaEmVeNha.jpg';
import mp3_MuonRoiMaSaoCon from '../asset/media/MuonRoiMaSaoCon.mp3';
import img_MuonRoiMaSaoCon from '../asset/images/MuonRoiMaSaoCon.png';
import mp3_DayXeBo from '../asset/media/DayXeBo.mp3';
import img_DayXeBo from '../asset/images/DayXeBo.jpg';

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
            {
                id: 4,
                name: 'Dĩ vãng nhạt nhòa',
                singer: 'Hà Nhi',
                file: mp3_DiVangNhatNhoa,
                image: img_DiVangNhatNhoa,
            },
            {
                id: 5,
                name: 'Đưa em về nhà',
                singer: 'GreyD + Chillies',
                file: mp3_DuaEmVeNha,
                image: img_DuaEmVeNha,
            },
            {
                id: 6,
                name: 'Muộn rồi mà sao còn',
                singer: 'Sơn Tùng MTP',
                file: mp3_MuonRoiMaSaoCon,
                image: img_MuonRoiMaSaoCon,
            },
            {
                id: 7,
                name: 'Đẩy xe bò',
                singer: 'Phương Mỹ Chi x DTAP',
                file: mp3_DayXeBo,
                image: img_DayXeBo,
            },
            {
                id: 8,
                name: 'Sorry',
                singer: 'Hà Nhi',
                file: mp3_Sorry,
                image: img_Sorry,
            },
        ],
        currentMusicIndex: null,
        isPlaying: false,
        searchText: '',
    });
    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
};

export { MusicPlayerContext, MusicPlayerProvider };

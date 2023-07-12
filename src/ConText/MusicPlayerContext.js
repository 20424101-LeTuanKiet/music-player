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
import mp3_NauAnChoEm from '../asset/media/NauAnChoEm.mp3';
import img_NauAnChoEm from '../asset/images/NauAnChoEm.jpg';
import mp3_GieoQue from '../asset/media/GieoQue.mp3';
import img_GieoQue from '../asset/images/GieoQue.jpg';
import mp3_TuBo from '../asset/media/TuBo.mp3';
import img_TuBo from '../asset/images/TuBo.jpg';
import mp3_GapMeTrongMo from '../asset/media/GapMeTrongMo.mp3';
import img_GapMeTrongMo from '../asset/images/GapMeTrongMo.jpg';

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
            {
                id: 9,
                name: 'Nấu ăn cho em',
                singer: 'Đen ft PiaLinh',
                file: mp3_NauAnChoEm,
                image: img_NauAnChoEm,
            },
            {
                id: 10,
                name: 'Gieo quẻ',
                singer: 'Hoàng Thùy Linh, Đen',
                file: mp3_GieoQue,
                image: img_GieoQue,
            },
            {
                id: 11,
                name: 'Từ bỏ',
                singer: 'Erik',
                file: mp3_TuBo,
                image: img_TuBo,
            },
            {
                id: 12,
                name: 'Gặp mẹ trong mơ',
                singer: 'Thùy Chi',
                file: mp3_GapMeTrongMo,
                image: img_GapMeTrongMo,
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

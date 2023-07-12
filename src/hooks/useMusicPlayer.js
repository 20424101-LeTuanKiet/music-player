import { useContext } from 'react';
import { MusicPlayerContext } from '../ConText/MusicPlayerContext';

export default function useMusicPlayer() {
    const [state, setState] = useContext(MusicPlayerContext);

    function playMusicDefault(index = 0) {
        state.audioPlayer = new Audio(state.musicList[index].file);
        setState((state) => ({
            ...state,
            currentMusicIndex: index,
            isPlaying: false,
        }));
    }

    function playMusic(index) {
        if (index === state.currentMusicIndex) {
            togglePlay();
        } else {
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.musicList[index].file);
            state.audioPlayer.play();
            setState((state) => ({
                ...state,
                currentMusicIndex: index,
                isPlaying: true,
            }));
        }
    }

    function togglePlay() {
        if (state.isPlaying) {
            state.audioPlayer.pause();
        } else {
            state.audioPlayer.play();
        }
        setState((state) => ({ ...state, isPlaying: !state.isPlaying }));
    }

    function playPreviousMusic() {
        const newIndex =
            (((state.currentMusicIndex + -1) % state.musicList.length) +
                state.musicList.length) %
            state.musicList.length;
        playMusic(newIndex);
    }

    function playNextMusic() {
        const newIndex = (state.currentMusicIndex + 1) % state.musicList.length;
        playMusic(newIndex);
    }

    function setSearchText(text) {
        setState((state) => ({ ...state, searchText: text }));
    }

    function getMusicList() {
        return state.musicList.filter((music) => {
            return music.name
                .toLowerCase()
                .includes(state.searchText.toLowerCase());
        });
    }

    return {
        playMusicDefault,
        playMusic,
        togglePlay,
        currentPlaying: state.audioPlayer,
        currentMusicName:
            state.currentMusicIndex !== null &&
            state.musicList[state.currentMusicIndex].name,
        currentSinger:
            state.currentMusicIndex !== null &&
            state.musicList[state.currentMusicIndex].singer,
        // musicList: state.musicList,
        musicList: getMusicList(),

        isPlaying: state.isPlaying,
        currentMusicAvatar:
            state.currentMusicIndex !== null &&
            state.musicList[state.currentMusicIndex].image,

        playPreviousMusic,
        playNextMusic,
        setSearchText,
    };
}

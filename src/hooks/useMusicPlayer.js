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

    return {
        playMusicDefault,
        playMusic,
        togglePlay,
        currentPlaying: state.audioPlayer,
        currentMusicName:
            state.currentMusicIndex !== null &&
            state.musicList[state.currentMusicIndex].name,
        musicList: state.musicList,
        isPlaying: state.isPlaying,
        currentMusicAvatar:
            state.currentMusicIndex !== null &&
            state.musicList[state.currentMusicIndex].image,
        playPreviousMusic,
        playNextMusic,
    };
}

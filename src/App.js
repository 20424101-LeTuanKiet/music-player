import { MusicPlayerProvider } from './ConText/MusicPlayerContext';
import MusicList from './components/MusicList';
import Player from './components/Player';

function App() {
    return (
        <MusicPlayerProvider>
            <div className="grid">
                <div className="row no-gutters">
                    <div
                        className="col s-24 m-12 l-12"
                        style={{
                            backgroundColor: 'var(--background-music-player)',
                        }}
                    >
                        <Player />
                    </div>

                    <div
                        className="col s-24 m-12 l-12"
                        style={{
                            backgroundColor: 'var(--background-music-list)',
                        }}
                    >
                        <MusicList />
                    </div>
                </div>
            </div>
        </MusicPlayerProvider>
    );
}

export default App;

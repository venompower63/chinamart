import { useAmbientMusic } from '../utils/ambientMusic';
import { Music, Volume2, VolumeX } from 'lucide-react';
import { useState } from 'react';

export default function AmbientMusicPlayer() {
  const { isPlaying, volume, play, stop, setVolume } = useAmbientMusic();
  const [showControls, setShowControls] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        className="ambient-music-btn"
        onClick={() => setShowControls(!showControls)}
        title="Фоновая музыка"
      >
        <Music size={20} className={isPlaying ? 'playing' : ''} />
      </button>

      {/* Controls panel */}
      {showControls && (
        <div className="ambient-music-panel">
          <div className="panel-header">
            <Music size={18} />
            <span>Фоновая музыка</span>
            <button className="close-btn" onClick={() => setShowControls(false)}>
              ×
            </button>
          </div>
          
          <div className="panel-content">
            <p className="music-title">Традиционная китайская музыка</p>
            <p className="music-description">
              Расслабляющие мелодии в духе торговли и процветания
            </p>

            <div className="controls">
              <button
                className={`play-btn ${isPlaying ? 'active' : ''}`}
                onClick={toggleMusic}
              >
                {isPlaying ? (
                  <>
                    <VolumeX size={18} />
                    Выключить
                  </>
                ) : (
                  <>
                    <Volume2 size={18} />
                    Включить
                  </>
                )}
              </button>

              {isPlaying && (
                <div className="volume-control">
                  <label>Громкость</label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume * 100}
                    onChange={(e) => setVolume(Number(e.target.value) / 100)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .ambient-music-btn {
          position: fixed;
          bottom: 100px;
          right: 20px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(230, 57, 70, 0.4);
          z-index: 1000;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }
        .ambient-music-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(230, 57, 70, 0.5);
        }
        .ambient-music-btn svg {
          transition: all 0.3s;
        }
        .ambient-music-btn svg.playing {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .ambient-music-panel {
          position: fixed;
          bottom: 160px;
          right: 20px;
          width: 280px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.15);
          z-index: 1001;
          overflow: hidden;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .panel-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px;
          background: linear-gradient(135deg, var(--secondary) 0%, #0d1b2a 100%);
          color: white;
          font-weight: 600;
        }
        .panel-header span {
          flex: 1;
        }
        .close-btn {
          background: none;
          border: none;
          color: white;
          font-size: 20px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
          padding: 0;
          line-height: 1;
        }
        .close-btn:hover {
          opacity: 1;
        }

        .panel-content {
          padding: 20px;
        }
        .music-title {
          font-weight: 600;
          color: var(--text-dark);
          margin-bottom: 6px;
          font-size: 15px;
        }
        .music-description {
          font-size: 13px;
          color: var(--text-light);
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .controls {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .play-btn {
          width: 100%;
          padding: 14px;
          border-radius: 10px;
          border: none;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s;
        }
        .play-btn:not(.active) {
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
        }
        .play-btn:not(.active):hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(230, 57, 70, 0.3);
        }
        .play-btn.active {
          background: var(--bg-light);
          color: var(--text-medium);
        }
        .play-btn.active:hover {
          background: var(--border);
        }

        .volume-control {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .volume-control label {
          font-size: 13px;
          color: var(--text-medium);
          font-weight: 500;
        }
        .volume-control input[type="range"] {
          width: 100%;
          height: 6px;
          border-radius: 3px;
          background: var(--bg-light);
          appearance: none;
          cursor: pointer;
        }
        .volume-control input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--primary);
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(230, 57, 70, 0.3);
        }

        @media (max-width: 480px) {
          .ambient-music-btn {
            bottom: 90px;
            right: 16px;
            width: 44px;
            height: 44px;
          }
          .ambient-music-panel {
            bottom: 145px;
            right: 16px;
            left: 16px;
            width: auto;
          }
        }
      `}</style>
    </>
  );
}

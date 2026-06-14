import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function BackgroundMusic() {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isMuted, setIsMuted] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const audio = audioRef.current;
		if (!audio) return;

		// Настройка аудио
		audio.volume = 0.08; // Очень тихий, приятный звук (8%)
		audio.loop = true; // Зациклить

		// Попытка воспроизвести после загрузки
		const playAudio = async () => {
			try {
				await audio.play();
				setIsLoaded(true);
			} catch (error) {
				// Autoplay blocked - will play on first interaction
				console.log("Autoplay blocked, waiting for interaction");
			}
		};

		// Слушатель на первое взаимодействие пользователя
		const handleInteraction = () => {
			if (!isLoaded && audio.paused) {
				audio
					.play()
					.then(() => {
						setIsLoaded(true);
					})
					.catch(console.log);
			}
		};

		// Запускаем при загрузке страницы (может сработать)
		playAudio();

		// Слушаем любое взаимодействие
		document.addEventListener("click", handleInteraction, { once: true });
		document.addEventListener("touchstart", handleInteraction, { once: true });

		return () => {
			document.removeEventListener("click", handleInteraction);
			document.removeEventListener("touchstart", handleInteraction);
		};
	}, [isLoaded]);

	const toggleMute = () => {
		const audio = audioRef.current;
		if (audio) {
			if (isMuted) {
				audio.volume = 0.08;
				audio.play().catch(console.log);
				setIsMuted(false);
			} else {
				audio.pause();
				setIsMuted(true);
			}
		}
	};

	return (
		<>
			<audio ref={audioRef} src="/background-music.mp3" preload="auto" />

			{/* Кнопка управления музыкой */}
			<button
				className="music-control-btn"
				onClick={toggleMute}
				title={isMuted ? "Включить музыку" : "Выключить музыку"}
			>
				{isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
			</button>

			<style>{`
        .music-control-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(230, 57, 70, 0.35);
          z-index: 9999;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          animation: pulse-subtle 3s infinite;
        }
        .music-control-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(230, 57, 70, 0.45);
        }
        @keyframes pulse-subtle {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        
        @media (max-width: 480px) {
          .music-control-btn {
            bottom: 20px;
            right: 16px;
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
		</>
	);
}

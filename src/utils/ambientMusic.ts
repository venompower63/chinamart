/**
 * Traditional Chinese Ambient Music Generator
 * Creates a relaxing, meditative background soundscape inspired by
 * traditional Chinese instruments (guzheng, pipa, bamboo flute)
 */

class AmbientMusicPlayer {
	private audioContext: AudioContext | null = null;
	private masterGain: GainNode | null = null;
	private isPlaying = false;
	private oscillators: OscillatorNode[] = [];
	private intervals: number[] = [];

	// Chinese pentatonic scale frequencies (relative to C)
	// C, D, E, G, A (pentatonic)
	private readonly pentatonicFrequencies = {
		C4: 261.63,
		D4: 293.66,
		E4: 329.63,
		G4: 392.0,
		A4: 440.0,
		C5: 523.25,
		D5: 587.33,
		E5: 659.25,
		G5: 783.99,
		A5: 880.0,
	};

	// Low drone notes for background
	private readonly droneFrequencies = [130.81, 196.0, 261.63]; // C3, G3, C4

	/**
	 * Initialize audio context (must be called after user interaction)
	 */
	private initAudio(): void {
		if (this.audioContext) return;

		this.audioContext = new (
			window.AudioContext ||
			(window as unknown as { webkitAudioContext: typeof AudioContext })
				.webkitAudioContext
		)();
		this.masterGain = this.audioContext.createGain();
		this.masterGain.gain.value = 0.15; // Very low volume for background
		this.masterGain.connect(this.audioContext.destination);
	}

	/**
	 * Create a soft sine wave oscillator with envelope
	 */
	private createSoftTone(
		frequency: number,
		duration: number,
		volume: number = 0.3,
	): void {
		if (!this.audioContext || !this.masterGain) return;

		const osc = this.audioContext.createOscillator();
		const gain = this.audioContext.createGain();
		const filter = this.audioContext.createBiquadFilter();

		// Use sine wave for soft, traditional sound
		osc.type = "sine";
		osc.frequency.value = frequency;

		// Soft low-pass filter for warmth
		filter.type = "lowpass";
		filter.frequency.value = 800;
		filter.Q.value = 1;

		// Gentle envelope
		const now = this.audioContext.currentTime;
		gain.gain.setValueAtTime(0, now);
		gain.gain.linearRampToValueAtTime(volume * 0.15, now + 0.5); // Slow attack
		gain.gain.setValueAtTime(volume * 0.15, now + duration - 1);
		gain.gain.linearRampToValueAtTime(0, now + duration); // Slow release

		osc.connect(filter);
		filter.connect(gain);
		gain.connect(this.masterGain);

		osc.start(now);
		osc.stop(now + duration);
	}

	/**
	 * Create guzheng-like pluck sound
	 */
	private createGuzhengPluck(frequency: number): void {
		if (!this.audioContext || !this.masterGain) return;

		const osc = this.audioContext.createOscillator();
		const gain = this.audioContext.createGain();
		const filter = this.audioContext.createBiquadFilter();

		osc.type = "triangle";
		osc.frequency.value = frequency;

		// Add slight vibrato
		const vibrato = this.audioContext.createOscillator();
		const vibratoGain = this.audioContext.createGain();
		vibrato.frequency.value = 5;
		vibratoGain.gain.value = 2;
		vibrato.connect(vibratoGain);
		vibratoGain.connect(osc.frequency);

		// Quick attack, slow decay for plucked string sound
		filter.type = "lowpass";
		filter.frequency.value = 1200;

		const now = this.audioContext.currentTime;
		gain.gain.setValueAtTime(0.8, now);
		gain.gain.exponentialRampToValueAtTime(0.01, now + 2.5);

		osc.connect(filter);
		filter.connect(gain);
		gain.connect(this.masterGain!);

		vibrato.start(now);
		osc.start(now);
		vibrato.stop(now + 2.5);
		osc.stop(now + 2.5);
	}

	/**
	 * Create ambient drone for background atmosphere
	 */
	private startDrone(): void {
		if (!this.audioContext || !this.masterGain) return;

		const ctx = this.audioContext;
		const masterGain = this.masterGain;

		this.droneFrequencies.forEach((freq, i) => {
			const osc = ctx.createOscillator();
			const gain = ctx.createGain();
			const filter = ctx.createBiquadFilter();

			osc.type = "sine";
			osc.frequency.value = freq;

			// Very slow volume oscillation for breathing effect
			const lfo = ctx.createOscillator();
			const lfoGain = ctx.createGain();
			lfo.frequency.value = 0.05 + i * 0.02; // Very slow
			lfoGain.gain.value = 0.02;
			lfo.connect(lfoGain);
			lfoGain.connect(gain.gain);

			filter.type = "lowpass";
			filter.frequency.value = 400;

			gain.gain.value = 0.08;

			osc.connect(filter);
			filter.connect(gain);
			gain.connect(masterGain);

			osc.start();
			lfo.start();

			this.oscillators.push(osc, lfo);
		});
	}

	/**
	 * Play a random pentatonic melody pattern
	 */
	private playMelodyPattern(): void {
		const notes = Object.values(this.pentatonicFrequencies);
		const patternLength = 4;

		for (let i = 0; i < patternLength; i++) {
			const noteIndex = Math.floor(Math.random() * notes.length);
			const delay = i * (1500 + Math.random() * 1000);

			setTimeout(() => {
				this.createGuzhengPluck(
					notes[noteIndex] * (Math.random() > 0.7 ? 2 : 1),
				);
			}, delay);
		}
	}

	/**
	 * Play occasional bell/chime sounds
	 */
	private playChime(): void {
		if (!this.audioContext || !this.masterGain) return;

		const chimeFreqs = [1046.5, 1174.66, 1318.51, 1567.98]; // C6, D6, E6, G6

		const ctx = this.audioContext;
		const osc = ctx.createOscillator();
		const gain = ctx.createGain();

		osc.type = "sine";
		osc.frequency.value =
			chimeFreqs[Math.floor(Math.random() * chimeFreqs.length)];

		const now = ctx.currentTime;
		gain.gain.setValueAtTime(0.3, now);
		gain.gain.exponentialRampToValueAtTime(0.01, now + 4);

		osc.connect(gain);
		gain.connect(this.masterGain!);

		osc.start(now);
		osc.stop(now + 4);
	}

	/**
	 * Start playing ambient music
	 */
	start(): void {
		if (this.isPlaying) return;

		this.initAudio();
		if (this.audioContext?.state === "suspended") {
			this.audioContext.resume();
		}

		this.isPlaying = true;

		// Start background drone
		this.startDrone();

		// Play melody patterns at random intervals
		const melodyInterval = setInterval(
			() => {
				if (this.isPlaying) {
					this.playMelodyPattern();
				}
			},
			4000 + Math.random() * 3000,
		);
		this.intervals.push(melodyInterval as unknown as number);

		// Play chimes occasionally
		const chimeInterval = setInterval(() => {
			if (this.isPlaying && Math.random() > 0.6) {
				this.playChime();
			}
		}, 8000);
		this.intervals.push(chimeInterval as unknown as number);

		// Play soft ambient tones
		const ambientInterval = setInterval(() => {
			if (this.isPlaying) {
				const notes = Object.values(this.pentatonicFrequencies);
				const freq = notes[Math.floor(Math.random() * notes.length)];
				this.createSoftTone(freq, 3 + Math.random() * 2, 0.2);
			}
		}, 6000);
		this.intervals.push(ambientInterval as unknown as number);
	}

	/**
	 * Stop playing ambient music
	 */
	stop(): void {
		this.isPlaying = false;

		// Clear intervals
		this.intervals.forEach((id) => clearInterval(id));
		this.intervals = [];

		// Fade out master gain
		if (this.masterGain && this.audioContext) {
			const now = this.audioContext.currentTime;
			this.masterGain.gain.linearRampToValueAtTime(0, now + 1);
		}

		// Stop oscillators
		setTimeout(() => {
			this.oscillators.forEach((osc) => {
				try {
					osc.stop();
				} catch (e) {
					// Already stopped
				}
			});
			this.oscillators = [];
		}, 1100);
	}

	/**
	 * Set volume (0-1)
	 */
	setVolume(volume: number): void {
		if (this.masterGain) {
			this.masterGain.gain.value = volume * 0.2; // Max 20%
		}
	}

	/**
	 * Check if music is currently playing
	 */
	getIsPlaying(): boolean {
		return this.isPlaying;
	}
}

// Singleton instance
export const ambientMusic = new AmbientMusicPlayer();

// React hook for using ambient music
import { useState, useEffect, useCallback } from "react";

export function useAmbientMusic() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolumeState] = useState(0.3);

	const play = useCallback(() => {
		ambientMusic.start();
		setIsPlaying(true);
	}, []);

	const stop = useCallback(() => {
		ambientMusic.stop();
		setIsPlaying(false);
	}, []);

	const setVolume = useCallback((vol: number) => {
		ambientMusic.setVolume(vol);
		setVolumeState(vol);
	}, []);

	useEffect(() => {
		return () => {
			if (isPlaying) {
				ambientMusic.stop();
			}
		};
	}, [isPlaying]);

	return { isPlaying, volume, play, stop, setVolume };
}

import { WaveTypes } from './waveTypes';
import { SamplingRate } from './samplingRate';

// Initialize WebAudioAPI.
const audioContext = new AudioContext();
// Set to Stereo Output by L and R.
const channels = 2;

// 44.1kHz → CD_STANDARD.
// 48kHz → VIDEO_STANDARD(and also HiFiAudio).
audioContext.sampleRate = SamplingRate.VIDEO_STANDARD;

// First, create the instance of Oscillator and Gain Node.
// Then, OscillatorNode (Input) → GainNode (Volume) → AudioDestinationNode (Output).
// In addition, It can also choose from four WaveTypes.
export const generateSound = () => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = WaveTypes.SINE;
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
}

// The Equally Spaced Frequency Ratio is `2^(1/31)`.
// Also, the Reference Frequency is set to `440Hz`.
export const scaleToFrequency = () => {
    const frequency = 440 * Math.pow(2, (scale - 69) / 31);
    return frequency;
}
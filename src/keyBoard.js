// Initialize WebAudioAPI.
const audioContext = new AudioContext();
// Set to Stereo Output by L and R.
const channels = 2

// 44.1kHz → Records 44,100 Sound Data per second.
// 48kHz → Records 48,000 Sound Data per second.
audioContext.sampleRate = 48000;

// First, create the instance of Oscillator and Gain Node.
// Then, OscillatorNode (Input) → GainNode (Volume) → AudioDestinationNode (Output).
export const generateSound = () => {
    const oscillator = audioContext.createOscillator();
    oscillator.type = "sine";
    const gain = audioContext.createGain();
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
// Initialize WebAudioAPI.
const audioContext = new AudioContext();
const channels = 2
audioContext.sampleRate = 48000;

// Create the StereoPanner. (WIP)
const panner = audioContext.createStereoPanner();

// First, create the instance of Oscillator and Gain Node.
// Then, OscillatorNode (Input) -> GainNode (Volume) -> AudioDestinationNode (Output).
export const generateSound = () => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
}
// First, create the AudioBufferSource.
// Next, create the Elements of AudioBuffer.
// And, Set up AudioBuffer to AudioBufferNode. (WIP)
const bufferSource = audioContext.createBufferSource();
const buffer = audioContext.createBuffer(2, 22050, 48000)
bufferSource.buffer = buffer

// Create the StereoPanner. (WIP)
const panner = audioContext.createStereoPanner();

// WHAT? (WIP)
export const et31 = () => {
    for (let i = 0; i < 31; ++i) {
        document.getElementById("keyboard" + i).onclick = function () {
            keyboard(69 + i)
        }
    }
}
// First, create the AudioBufferSource.
// Next, create the Elements of AudioBuffer.
// And, Set up AudioBuffer to AudioBufferNode.
const bufferSource = audioContext.createBufferSource();
const buffer = audioContext.createBuffer(2, 22050, 48000)
bufferSource.buffer = buffer
// import MediaInfo from 'mediainfo.js';

const readChunk = (file) => (chunkSize, offset) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (event) => {
      if (event.target.error) {
        reject(event.target.error)
      }
      resolve(new Uint8Array(event.target.result))
    }
    reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize))
  })

export const wasm = async (file) => {
  const MediaInfo = await import("mediainfo.js");
  return new Promise(res => {
    MediaInfo.default().then((mediainfo) => {
      mediainfo
      .analyzeData(() => file.size, readChunk(file))
      .then((result) => {
        res(result);
      })
    })
  })
};
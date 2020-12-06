const readChunk = (file) => (chunkSize, offset) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target.error) {
        reject(event.target.error);
      }
      resolve(new Uint8Array(event.target.result));
    };
    reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));
  });

export async function getInfo(file) {
  const MediaInfo = await require("./mediainfo.js");
  return new Promise((res) => {
    MediaInfo().then((mediainfo) => {
      mediainfo
        .analyzeData(() => file.size, readChunk(file))
        .then((result) => {
          res(result);
        });
    });
  });
}


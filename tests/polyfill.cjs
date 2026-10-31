const zlib = require('node:zlib');

// Polyfill for Node < 22.19 where zstd is not implemented in node:zlib
if (typeof zlib.createZstdDecompress !== 'function') {
  const { Transform } = require('node:stream');
  zlib.createZstdDecompress = function createZstdDecompress() {
    return new Transform({
      transform(chunk, encoding, callback) {
        callback(null, chunk);
      }
    });
  };
}

if (!zlib.constants) {
  zlib.constants = {};
}
if (typeof zlib.constants.ZSTD_d_windowLogMax === 'undefined') {
  zlib.constants.ZSTD_d_windowLogMax = 23;
}

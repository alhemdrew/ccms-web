import { copyFile, cp } from 'node:fs/promises';
import { relative, resolve, sep } from 'node:path';

const publicDirectory = resolve('public');
const outputDirectory = resolve('dist');

await copyFile(resolve(outputDirectory, 'index.html'), resolve(outputDirectory, '404.html'));

await cp(publicDirectory, outputDirectory, {
  recursive: true,
  filter: (source) => {
    const assetPath = relative(publicDirectory, source).split(sep);
    const isHikingSource = assetPath[0] === 'images'
      && assetPath[1] === 'MOUNTAIN HIKING'
      && /\.(jpe?g|cr3)$/i.test(assetPath[assetPath.length - 1] ?? '');

    return !isHikingSource;
  },
});

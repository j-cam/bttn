import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';
import path from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react'],
  esbuildPlugins: [
    sassPlugin({
      type: 'local-css',
      loadPaths: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'src/scss'),
      ],
      importMapper: (url) => {
        if (url === 'bttn') {
          return path.resolve(__dirname, 'src/scss/bttn/import.scss');
        }
        return url;
      },
    }),
  ],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});

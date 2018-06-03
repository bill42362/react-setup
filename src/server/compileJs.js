// compileJs.js
'use strict';
import path from 'path';
import Webpack from 'webpack';
import MemoryFS from 'memory-fs';
import WebpackConfig from './server.webpack.config.js';
import requireFromString from 'require-from-string';

const outputErrors = (err, stats) => {
  if(err) {
    console.error(err.stack || err);
    if(err.details) { console.error(err.details); }
    return;
  }

  const info = stats.toJson();
  if(stats.hasErrors()) { console.error(info.errors); }
  if(stats.hasWarnings()) { console.warn(info.warnings); }
}; 

const fs = new MemoryFS();
const webpackCompiler = Webpack(WebpackConfig);
webpackCompiler.outputFileSystem = fs;

export const compileJs = () => new Promise((resolve, reject) => {
  webpackCompiler.run((error, stats) => {
    outputErrors(error, stats);
    const renderAppPath = path.resolve(
      WebpackConfig.output.path,
      'renderApp.js'
    );
    const createInitialStorePath = path.resolve(
      WebpackConfig.output.path,
      'createInitialStore.js'
    );
    const renderAppString = fs.readFileSync(renderAppPath, 'utf8');
    const createInitialStoreString = fs.readFileSync(
      createInitialStorePath,
      'utf8'
    );
    const { renderApp } = requireFromString(renderAppString);
    const { createInitialStore }
      = requireFromString(createInitialStoreString);
    resolve({ renderApp, createInitialStore });
  });
});

export default compileJs;

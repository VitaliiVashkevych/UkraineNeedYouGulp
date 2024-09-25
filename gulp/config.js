const srcPath = 'src';
const destPath = 'dist';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    js: `${srcPath}/js`,
    img: `${srcPath}/assets/img`,
    fonts: `${srcPath}/assets/fonts`,
  },
  dest: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    js: `${destPath}/js`,
    img: `${destPath}/img`,
    fonts: `${destPath}/fonts`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  }
};

export default config;
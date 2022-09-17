const { Markup } = require('canvas-markup');

const markup = new Markup();

/* Rendering the file index.ejs and saving it as a png. */
markup.renderFile(`${__dirname}\\index.ejs`, { title: 'Markup', description: 'Made with Canvas-Markup©' });
/* Setting the viewport of the display to 1920x1080. */
markup.setViewport(1920, 1080);
markup.save();
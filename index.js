const { Markup } = require('./src/index');

const markup = new Markup();

markup.render('<img src="https://shop.chessok.ru/wa-data/public/shop/products/63/12/1263/images/294/294.970.jpg" alt></img>').then(async () => {
    await markup.saveRegion({ x: 0, y: 0, width: 80, height: 80 });
});
/* This class is used to render html to image */
import { writeFileSync } from 'fs';
import * as puppeteer from 'puppeteer';
import * as ejs from 'ejs';


export class Markup {
    private html: string;
    private view: { width: number, height: number, deviceScaleFactor: number };

    constructor() {
        this.html = `${__dirname}/index.html`;

        this.view = {
            width: 800,
            height: 600,
            deviceScaleFactor: 1
        };
    };

    /**
     * This is a function that is used to initialize.
     * 
     * @returns 
     */
    private async initialize() {
        const browser = await puppeteer.launch({ headless: 'chrome', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        return { browser: browser, page: page };
    };

    /**
     * Rendering the html file throw ejs.
     * 
     * @param path path to html file.
     * @param data variables for ejs.
     * @param options options for ejs.
     */
    async renderFile(path: string, data?: object, options?: object) {
        ejs.renderFile(path, data ?? {}, options ?? {}, (err: any, str: any) => {
            if (err) throw err;
            writeFileSync(this.html, str, 'utf-8');
        });
    };

    /**
     * Rendering the html string throw ejs.
     * 
     * @param template html string.
     * @param data variables for ejs.
     * @param options options for ejs.
     */
    async render(template: string, data?: object, options?: object) {
        const str = ejs.render(template, data ?? {}, options ?? {});
        writeFileSync(this.html, str, 'utf-8');
    };

    /**
     * Setting the viewport of the display resolution.
     * 
     * @param width pixels wide.
     * @param height pixels high.
     * @param deviceScaleFactor your display device.
     */
    async setViewport(width: number = 800, height: number = 600, deviceScaleFactor?: number) {
        this.view = {
            width: width,
            height: height,
            deviceScaleFactor: deviceScaleFactor ?? 1
        }
    };

    /**
     * This is a function that is used to save the rendered html.
     * 
     * @param savePath is a path to save your rendered img.
     * @param fullPage save fullpage.
     * @param transparent it removes the white background.
     */
    async save(savePath?: string, fullPage?: boolean, transparent?: boolean) {
        const { browser, page } = await this.initialize();

        await page.setViewport({
            width: this.view?.width ?? 800,
            height: this.view?.height ?? 600,
            deviceScaleFactor: this.view?.deviceScaleFactor ?? 1
        });

        await page.goto(`file:///${this.html}`, { waitUntil: 'load', timeout: 0 });

        if (typeof savePath == 'string') {
            const buffer = await page.screenshot({ path: savePath, omitBackground: transparent ?? false, fullPage: fullPage ?? false });
            await browser.close();
            return buffer;
        } else {
            const buffer = await page.screenshot({ omitBackground: transparent ?? false, fullPage: fullPage ?? false });
            await browser.close();
            return buffer;
        };
    };

    /**
     * This is a function that is used to save region the rendered html.
     * 
     * @param savePath is a path to save your rendered img.
     * @param options options for save region.
     * * `x` - from x position
     * * `y` - from y position
     * * `width` - pixels wide
     * * `height` - pixels high
     * @param transparent it removes the white background.
     */
    async saveRegion(savePath?: string, options?: { x: number, y: number, width: number, height: number }, transparent?: boolean) {
        const { browser, page } = await this.initialize();

        await page.setViewport({
            width: this.view?.width ?? 800,
            height: this.view?.height ?? 600,
            deviceScaleFactor: this.view?.deviceScaleFactor ?? 1
        });

        await page.goto(`file:///${this.html}`, { waitUntil: 'load', timeout: 0 });

        if (typeof savePath == 'string') {
            const buffer = await page.screenshot({ path: savePath, omitBackground: transparent ?? false, clip: options });
            await browser.close();
            return buffer;
        } else {
            const buffer = await page.screenshot({ omitBackground: transparent ?? false, clip: options });
            await browser.close();
            return buffer;
        };
    };
}
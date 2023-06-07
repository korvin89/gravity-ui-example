import path from 'path';
import {
    createLayoutPlugin,
    createRenderFunction,
    createYandexMetrikaPlugin,
} from '@gravity-ui/app-layout';
import type {Request, Response} from 'express';

const renderLayout = createRenderFunction([
    createLayoutPlugin({
        manifest: path.resolve(__dirname, '../../../dist/public/build/assets-manifest.json'),
    }),
    createYandexMetrikaPlugin(),
]);

export async function homeController(_request: Request, response: Response){
    const html = renderLayout({
        title: 'Gravity UI app',
        pluginsOptions: {
            layout: {
                name: 'home',
            },
        },
    });
    response.send(html);
}

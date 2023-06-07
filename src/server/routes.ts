import {homeController} from './controllers/home';

export const routes = {
    'GET /': {handler: homeController},
};

import {defineConfig} from '@gravity-ui/app-builder';

export default defineConfig({
    client: {
        devServer: {
            port: true,
        },
    },
    server: {
        port: 3000,
    },
});

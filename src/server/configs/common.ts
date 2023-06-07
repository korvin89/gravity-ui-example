import type {AppConfig} from '@gravity-ui/nodekit';

const config: Partial<AppConfig> = {
    appPort: parseInt(process.env.PORT || '3000', 10),
};

export default config;

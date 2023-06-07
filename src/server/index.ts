import path from 'node:path';

import {ExpressKit} from '@gravity-ui/expresskit';
import {NodeKit} from '@gravity-ui/nodekit';

import {routes} from './routes';

const nodeKit = new NodeKit({configsPath: path.resolve(__dirname, './configs')});

const app = new ExpressKit(nodeKit, routes);

app.run();

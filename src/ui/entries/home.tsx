import {createRoot} from 'react-dom/client';

import {App} from '../components/App';

import '@gravity-ui/uikit/styles/styles.scss';

const container = document.getElementById('root');

if (!container) {
    throw new Error('There is no element with id "root"');
}

createRoot(container).render(<App />);

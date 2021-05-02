import path from 'path';
import fs from 'fs';

// For React
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';

import App from '../src/App';

export const requestHandler = (req, res) => {
    // Load file from build
    fs.readFile(
        path.resolve(__dirname, '../build/index.html'),
        'utf8',
        (err, htmlData) => {
            if (err) {
                console.error('Read error', err);
                return res.status(404).end();
            } else {
                let routeMarkup = renderToString(
                    <React.StrictMode>
                        <StaticRouter location={req.originalUrl}>
                            <App />
                        </StaticRouter>
                    </React.StrictMode>
                )
                htmlData = htmlData.replace(
                    '<div id="root"></div>',
                    `<div id="root">${routeMarkup}</div>`
                )
                res.send(htmlData);
            }
        }
    );
}

export default requestHandler;
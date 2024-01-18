import localFont from 'next/font/local';

export const tarrgetFont = localFont({
    src: [
        {
            path: './tarrgetWeb2.woff2',
            weight: '400'
        },
        {
            path: './tarrgetWeb.woff',
            weight: '400'
        },
        {
            path: './tarrget.ttf',
            weight: '400'
        }
    ]

});

export const coolveticaFont = localFont({
    src: [
        {
            path: './coolveticaWeb2.woff2',
            weight: '400'
        },
        {
            path: './coolveticaWeb.woff',
            weight: '400'
        },
        {
            path: './coolvetica.ttf',
            weight: '400'
        }
    ]

});
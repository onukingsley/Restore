import React, { useEffect } from 'react';

const GoogleTagManager = () => {
    useEffect(() => {
        // Create the GTM script
        const gtmScript = document.createElement('script');
        gtmScript.async = true;
        gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=GTM-WKV3GT5`;

        // Create the GTM iframe
        const gtmIframe = document.createElement('iframe');
        gtmIframe.style.display = 'none';
        gtmIframe.src = `https://www.googletagmanager.com/ns.html?id=GTM-WKV3GT5`;

        // Append script to the body
        document.body.appendChild(gtmScript);

        // Append the iframe to the body
        document.body.appendChild(gtmIframe);

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(gtmScript);
            document.body.removeChild(gtmIframe);
        };
    }, []);

    return null; // This component does not render any UI
};

export default GoogleTagManager;

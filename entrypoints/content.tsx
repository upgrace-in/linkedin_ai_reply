import ReactDOM, { createRoot } from 'react-dom/client';
import Icon from '@/entrypoints/popup/Icon';

export default defineContentScript({
    matches: ['*://*.linkedin.com/*'],
    main(ctx) {
        const ui = createIntegratedUi(ctx, {
            position: 'inline',
            onMount: (container) => {
                // Create a root on the UI container and render a component
                const root = ReactDOM.createRoot(container);
                root.render(<Icon />);
                return root;
            },
            onRemove: (root) => {
                // Unmount the root when the UI is removed
                root?.unmount();
            },
        });

        // Call mount to add the UI to the DOM
        ui.mount();
    },
});

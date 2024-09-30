// 1. Import the style
import './style.css';
import ReactDOM from 'react-dom/client';
import Icon from "./Icon"

export default defineContentScript({
  matches: ['*://*.linkedin.com/*'],
  // 2. Set cssInjectionMode
  cssInjectionMode: 'ui',

  async main(ctx) {
    // 3. Define your UI
    const ui = await createShadowRootUi(ctx, {
      name: 'linkedin-ai-reply-dom',
      position: 'inline',
      onMount: (container) => {
        const app = document.createElement('div');
        container.append(app);

        // Create a root on the UI container and render a component
        const root = ReactDOM.createRoot(app);
        root.render(<Icon />);
        return root;
      },
      onRemove: (root) => {
        // Unmount the root when the UI is removed
        root?.unmount();
      },
    });

    // 4. Mount the UI
    ui.mount();
  },
});

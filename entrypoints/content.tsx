import './style.css';
import ReactDOM from 'react-dom/client';
import Icon from "./AI_Icon"

export default defineContentScript({
  matches: ['*://*.linkedin.com/*'],
  cssInjectionMode: 'ui',

  async main(ctx) {
    const ui = await createShadowRootUi(ctx, {
      name: 'linkedin-ai-reply-dom',
      position: 'inline',
      onMount: (container) => {
        const app = document.createElement('div');
        container.append(app);

        const root = ReactDOM.createRoot(app);

        // Function to check visibility
        const checkVisibility = () => {
          const contentEditableDiv = document.querySelector('.msg-form__contenteditable');
          if (contentEditableDiv && contentEditableDiv.offsetParent !== null) {
            // If the div is visible, render the Icon
            root.render(<Icon />);
            clearInterval(visibilityCheckInterval); // Stop checking once the icon is rendered
          }
        };

        // Start checking for visibility
        const visibilityCheckInterval = setInterval(checkVisibility, 500); // Check every 500ms

        return root;
      },
      onRemove: (root) => {
        root?.unmount();
      },
    });

    ui.mount();
  },
});

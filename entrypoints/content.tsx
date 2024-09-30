// import './style.css';
// import ReactDOM from 'react-dom/client';
// import Icon from "./AI_Icon"

// export default defineContentScript({
//   matches: ['*://*.linkedin.com/*'],
//   cssInjectionMode: 'ui',

//   async main(ctx) {
//     const ui = await createShadowRootUi(ctx, {
//       name: 'linkedin-ai-reply-dom',
//       position: 'inline',
//       onMount: (container) => {
//         alert("Exists")
//         const app = document.createElement('div');
//         container.append(app);

//         const root = ReactDOM.createRoot(app);
//         root.render(<Icon />);
//         return root;
//       },
//       onRemove: (root) => {
//         root?.unmount();
//       },
//     });

//     ui.mount();
//   },
// });

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
        // Function to check visibility and render Icon
        const checkVisibilityAndRenderIcon = () => {
          const contentEditableDiv = document.querySelector('.msg-form__contenteditable');
          if (contentEditableDiv && contentEditableDiv.offsetParent !== null) {
            // Create a new div for the icon
            const iconContainer = document.createElement('div');
            contentEditableDiv.append(iconContainer); // Append to the contentEditable div

            const root = ReactDOM.createRoot(iconContainer);
            root.render(<Icon />); // Render Icon inside the newly created div

            clearInterval(visibilityCheckInterval); // Stop checking once the icon is rendered
          }
        };

        // Start checking for visibility
        const visibilityCheckInterval = setInterval(checkVisibilityAndRenderIcon, 500); // Check every 500ms

        return {
          cleanup: () => {
            clearInterval(visibilityCheckInterval); // Clean up the interval
          }
        };
      },
      onRemove: (root) => {
        root?.unmount();
      },
    });

    ui.mount();
  },
});

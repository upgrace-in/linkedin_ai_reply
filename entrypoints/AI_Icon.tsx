import React, { useState } from 'react';
import GenerateModal from './GenerateModal';
import AI_Icon from "@/assets/AI_Icon.svg";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


    useEffect(() => {
        const checkVisibility = () => {
            const textarea = document.querySelector('.msg-form__contenteditable') as HTMLElement | null;
            if (textarea) {
                // Create a wrapper div for the icon to append inside the textarea
                const iconWrapper = document.createElement('div');
                iconWrapper.innerHTML = `
                    <div class="ai_icon" style="position: absolute; cursor: pointer; bottom: 4px; right: 4px;">
                    <span>
                        <img src="${AI_Icon}" alt="AI Icon" />
                    </span>
                    </div>
                `;

                const iconElement = iconWrapper.querySelector('span');
                if (iconElement) {
                    iconElement.addEventListener('click', () => setIsModalOpen(true));
                }

                textarea.style.position = 'relative'; // Ensure relative positioning for proper placement
                textarea.appendChild(iconWrapper);

                clearInterval(visibilityCheckInterval)

                // Cleanup function to remove the icon when the component unmounts
                return () => {
                    if (textarea && iconWrapper) {
                        textarea.removeChild(iconWrapper);
                    }
                }
            }
        };

        // Start checking for visibility
        const visibilityCheckInterval = setInterval(checkVisibility, 500); // Check every 500ms
    }, []);

    useEffect(() => {
        const deploy_ai_icon = document.querySelector('.ai_icon');

        if (isModalOpen && deploy_ai_icon) {
            deploy_ai_icon.style.opacity = 0;
        }

        // Cleanup function to reset the opacity if needed
        return () => {
            if (deploy_ai_icon) {
                deploy_ai_icon.style.opacity = 1; // Reset to 1 or whatever default is
            }
        };
    }, [isModalOpen]);

    return <GenerateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
};

export default App;

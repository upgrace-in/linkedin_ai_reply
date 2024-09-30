import React, { useState } from 'react';
import GenerateModal from './GenerateModal';
import AI_Icon from "@/assets/AI_Icon.svg"

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className="z-999 bg-gray-900 flex items-center justify-center">
            <button
                onClick={() => setIsModalOpen(true)}
                className="fixed bg-blue-500 text-white rounded-md px-4 py-2"
            >
                <img src={AI_Icon} alt="AI Icon" className="mr-2" />
            </button>

            <GenerateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;

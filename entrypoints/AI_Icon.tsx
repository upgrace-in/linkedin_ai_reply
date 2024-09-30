import React, { useState } from 'react';
import GenerateModal from './GenerateModal';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    return (
        <div className="bg-gray-900 flex items-center justify-center">
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
                Open Generate Modal
            </button>

            <GenerateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;

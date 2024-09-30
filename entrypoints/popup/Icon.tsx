import React, { useState } from 'react';
import GenerateModal from './GenerateModal';
import "@/entrypoints/popup/App.css"

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 text-white rounded-md px-4 py-2"
            >
                Open Generate Modal
            </button>

            <GenerateModal open={isModalOpen} onClose={() => console.log("CLOSED")} />
        </div>
    );
};

export default App;

// import React, { useState } from 'react';
// import GenerateModal from './GenerateModal';
// import AI_Icon from "@/assets/AI_Icon.svg"

// const App: React.FC = () => {
//     const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//     return (
//         <div className="bg-gray-900 flex items-center justify-center">
//             <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="fixed bg-blue-500 text-white rounded-md px-4 py-2"
//             >
//                 <img src={AI_Icon} alt="AI Icon" className="mr-2" />
//             </button>

//             <GenerateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
//         </div>
//     );
// };

// export default App;


import React, { useState } from 'react';
import GenerateModal from './GenerateModal';
import AI_Icon from "@/assets/AI_Icon.svg";

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    return (
        <div className="absolute flex items-center justify-center top-0 left-0 w-full h-full">
            {/* TODO: place this icon properly */}
            <span
                onClick={() => setIsModalOpen(true)}
                className="absolute z-[9999] text-white rounded-md px-2 py-2 top-4 right-4"
                style={{ cursor: 'pointer' }} // Optional: Ensures the button is clickable
            >
                <img src={AI_Icon} alt="AI Icon" className="mr-2" />
            </span>

            <GenerateModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default App;

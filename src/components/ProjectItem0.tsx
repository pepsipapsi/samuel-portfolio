import React from 'react';

interface ProjectItemProps {
    img: string;
    title: string;
}

const ProjectItem0: React.FC<ProjectItemProps> = ({ img, title }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-purple-400 to-[#001b5e]'>
            <img src={img} alt={title} className='rounded-xl group-hover:opacity-10 w-auto' />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                    {title}
                </h3>
                <p className='text-xs pb-4 pt-2 text-white text-center'>Produsert sangen i bakgrunnen</p>
                <a href="https://nobimu.no/om-museet/">
                    <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer'>
                        Se mer
                    </p>
                </a>
            </div>
        </div>
    );
};

export default ProjectItem0;
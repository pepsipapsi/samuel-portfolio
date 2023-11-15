// ProfileButton.tsx
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import ProfilePic from '../assets/profilepic.jpg'
import "./ProfileButton.css"

const ProfileButton: React.FC = () => {
    const [showProfile, setShowProfile] = useState(false);

    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };

    return (
        <div>
            <button className='flex flex-col justify-center items-center' onClick={toggleProfile}>
                <FaUser className="cursor-pointer text-white mb-2" size={40} />
                <p className='text-white p-1 font-medium font-sans'>Profil</p>
            </button>

            {showProfile && (
                <div className="profile-overlay">
                    <div className="profile-container">
                        <img className="rounded max-w-[150px] mb-2" src={ProfilePic} alt="Profile Picture" />
                        <div className="profile-text-container">
                            <p className="profile-text font-sans font-bold">Hei! Jeg heter <br />Samuel Isamel Gonzalez Ampuero</p>
                            <button className="exit-button hover:bg-purple-800 hover:bg-opacity-80" onClick={toggleProfile}>
                                Lukk
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default ProfileButton;

import { createContext } from 'react';
import React from 'react';

export const ProfileContext = createContext({
	profile: {
    dateOfBirth: null,
    description: '',
    preferedGenderId: 1,
    avatar: null,
    trackIds: [],
  }, 
  handleChange: (key, value) => {},
});

export default function ProfileProvider({ children }) {

  const [newProfile, setProfile] = React.useState({
    dateOfBirth: null,
    description: '',
    preferedGenderId: 1,
    avatar: null,
    trackIds: [],
  });

  function updateProfile(key, value) {
    setProfile({
      ...newProfile,
      [key]: value,
    });
  }

	return (
		<ProfileContext.Provider
			value={{
        profile: newProfile,
        handleChange: updateProfile,
      }}
      
		>
			{children}
		</ProfileContext.Provider>
	);
}

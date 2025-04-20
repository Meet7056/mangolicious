import { createContext, useContext, useEffect, useState } from "react";
import { updateProfile, viewProfile } from "../global/allApis";


const UserContext = createContext();

export const useUserdata = () => useContext(UserContext);

export const UserProvider = ({ children }) => {

    const [userData, setUserData] = useState({});

    const getUserData = async () => {

        try {

            const response = await viewProfile();

            if (response.profile) {
                setUserData(response.profile)
            }
        } catch (error) {
            console.log({ error })
        }
    }

    const updateUserData = async (payload) => {

        try {

            const response = await updateProfile(payload);

            if (response.message == "Profile updated successfully") {
                setUserData(response.updated_data)
            }
        } catch (error) {
            console.log({ error })
        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <UserContext.Provider
          value={{
            userData,
            getUserData,
            updateUserData
          }}
        >
          {children}
        </UserContext.Provider>
      );

}
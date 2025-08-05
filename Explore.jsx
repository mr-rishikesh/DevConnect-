import React, { memo } from 'react'
import ProfileCard from '../components/ProfileCard'
import UserSettingsCard from '../components/UserSettingsCard '
import { useAuthStore } from '../store/useAuthStore'
import Footer from './Footer';


const Explore = () => {
    const {allUsers} = useAuthStore();
    return ( <>
      {/* <UserSettingsCard/> */}
      <div className="w-full flex justify-center pt-4 pb-8 lg:pt-2 lg:pb-1 bg-white dark:bg-gray-900 antialiased">
        <ul role="list" class="max-w-xl  divide-y divide-gray-200 dark:divide-gray-700">
        { allUsers.map((user) => {
        return (
          <ProfileCard user = {user}/>
        )
        })}
   
    {/* <ProfileCards/>
    <ProfileCard/>
    <ProfileCard/> */}
        </ul>
   

        {/* Footer sec */}
        <Footer/>
      </div></>
  )
}



export default Explore

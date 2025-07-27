import React, { memo } from 'react'
import ProfileCard from '../components/ProfileCard'
import UserSettingsCard from '../components/UserSettingsCard '


const Emergency = () => {
  return ( <>
  {/* <UserSettingsCard/> */}
  
    <div className="w-full flex justify-center pt-4 pb-8 lg:pt-2 lg:pb-1 bg-white dark:bg-gray-900 antialiased">
        

<ul role="list" class="max-w-xl  divide-y divide-gray-200 dark:divide-gray-700">
    <ProfileCard/>
    <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-3 rtl:space-x-reverse">
            <div class="shrink-0">
                <img class="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-4.jpg" alt="Neil image"/>
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-semibold text-gray-900 truncate dark:text-white">
                    Bonnie Green
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                    email@flowbite.com
                </p>
            </div>
            <span class="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                <span class="w-2 h-2 me-1 bg-red-500 rounded-full"></span>
                Unavailable
            </span>
        </div>
    </li>
</ul>

      
    </div></>
  )
}



export default Emergency

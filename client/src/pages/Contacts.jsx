import { useAuthStore } from "../store/useAuthStore"


// export function Contacts() {
//                 const {allUsers} = useAuthStore();


//     return (
//         <>
//    <div className="w-full flex justify-center bg-white dark:bg-gray-900 py-6">
        

// <ul class="  grid max-w-xl gap-6 md:grid-cols-3">
//     <li>
//         <input type="checkbox" id="react-option" value="" class="hidden peer" required=""/>
//         <label for="react-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
//             <div class="block">
//                 <img class="mb-2 w-7 h-7 text-sky-500"  src="https://i.pinimg.com/736x/29/c1/be/29c1be1725f5f902b7535280bc028097.jpg" />
//                 <div class="w-full text-lg font-semibold">My Network (Known person)         </div>
//                 <div class="w-full text-sm">     </div>
//             </div>
//         </label>
//     </li>
//     <li>
//         <input type="checkbox" id="flowbite-option" value="" class="hidden peer"/>
//         <label for="flowbite-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
//             <div class="block">
//                 <img class="mb-2 w-7 h-7 text-sky-500"  src="https://files.tiescenter.org/files/667NqY6eQg/two-girls-high-five?preferredLocale=en-US" />
                
//                 <div class="w-full text-lg font-semibold">Meet Your HealthBuddy</div>
//                 <div class="w-full text-sm"></div>
//             </div>
//         </label>
//     </li>
//     <li>
//         <input type="checkbox" id="angular-option" value="" class="hidden peer"/>
//         <label for="angular-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
//             <div class="block">
//                  <img class="mb-2 w-7 h-7 text-sky-500"  src="https://media.self.com/photos/5c40bda29056dc2fa7dbd7fd/4:3/w_1920,c_limit/stethoscope.jpg" />
                
//                 <div class="w-full text-lg font-semibold">Connect To Doctors</div>
//                 <div class="w-full text-sm"></div>
//             </div>
//         </label>
//     </li>
// </ul>

// </div>

//         </>
//     )
// }

import { useEffect, useState } from "react";

export  function Contacts() {
  const options = [
    {
      id: "option1",
      label: "My Network",
      img: "https://i.pinimg.com/736x/29/c1/be/29c1be1725f5f902b7535280bc028097.jpg",
    },
    {
      id: "option2",
      label: "HealthBuddy",
      img: "https://files.tiescenter.org/files/667NqY6eQg/two-girls-high-five?preferredLocale=en-US",
    },
    {
      id: "option3",
      label: "Connect to Doctors",
      img: "https://media.self.com/photos/5c40bda29056dc2fa7dbd7fd/4:3/w_1920,c_limit/stethoscope.jpg",
    },
  ];

  const [showingUsers , setShowingUsers] = useState();



  const [selectedId, setSelectedId] = useState("option1");

    useEffect(() => {

      

  },[selectedId] )

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <div key={option.id}>
          {/* Hidden checkbox (for accessibility and peer styling) */}
          <input
            type="checkbox"
            id={option.id}
            className="hidden peer"
            checked={selectedId === option.id}
            onChange={() => handleSelect(option.id)}
          />

          {/* Label styled as selectable card */}
          <label
            htmlFor={option.id}
            className={`inline-flex flex-col items-center justify-between p-4 w-44 text-center rounded-lg border-2 cursor-pointer transition-all
              ${
                selectedId === option.id
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-gray-300 text-gray-500 hover:bg-gray-50"
              }`}
          >
            <img src={option.img} alt={option.label} className="w-10 h-10 mb-2" />
            <span className="font-semibold">{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}

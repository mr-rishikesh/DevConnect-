import { useState } from "react";
import TagInput from "./TagInput.jsx";
import FileUpload from "./FileUpload.jsx";
import toast from "react-hot-toast";
import { usePostStore } from "../store/usePostStore.js";
import { useAuthStore } from "../store/useAuthStore.js";


export default function CreatePost() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [image , setImage] = useState(null);

  const [title , setTitle] = useState(null);
  const [description , setDescription] = useState(null);
  const[tag , setTag] = useState([]);
  const {createPost} = usePostStore();
 const {authUser} = useAuthStore();
   
  const handleSubmit = async () => {
    if(!title) return  toast.error("Title must Required")
    if(!description) return  toast.error("Description must Required")
      const id = authUser._id;

    try {

      await createPost({
        id , 
        
        image ,
        tags : tag ,
        title ,
        description

      })
      setTag([]);
      setImage(null);
      
      
      setIsModalOpen(false)
      




      
    } catch (error) {
      
    }
  
  }


  



  return (
    <>
      {/* Full-width container with centered button */}
      <div className="w-full flex justify-center bg-white dark:bg-gray-900 py-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  w-full sm:w-auto px-40 py-1.5 text-center "
          type="button"
        >
          Toggle modal
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
          aria-hidden="true"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              {/* Header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Create a Post
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Content */}
          

<form class="max-w-sm mx-auto my-5">

   <div class="mb-5">
      <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title*</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
  </div>
   <div class="mb-5">
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description*</label>
  <textarea id="message" onChange={(e) => setDescription(e.target.value)} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Description here"></textarea>
  </div>
    <div class="mb-5">
   <TagInput   tags={tag} setTags={setTag}/>
   <FileUpload setImagePreview={setImage} imagePreview={image}/>
  </div>
 

 
</form>


              {/* Footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                 onClick={handleSubmit}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Post
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Discard
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

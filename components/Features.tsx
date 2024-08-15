<<<<<<< HEAD
=======
"use client"
>>>>>>> 53234d9d5a1abb77564845d93973254558d8e0f0
const Features = ()=>{
    return (
        
        <div id="featurs" className="mb-40 mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Generated Content */}
            <div
              className="bg-white shadow-lg hover:bg-black 
              text-gray-800 hover:text-white rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <h3 className="text-xl font-semibold  mb-2">AI Generated</h3>
                <p className="">
                  State-of-the-art AI technology to create high-quality, unique
                  content tailored to your needs.
                </p>
              </div>
            </div>
            {/* Fast Response */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Fast Response
                </h3>
                <p className="text-gray-600">
                  Generate blog posts in seconds, saving you time and boosting
                  your productivity.
                </p>
              </div>
            </div>
            {/* No Limitation */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-6">
                <svg
                  className="w-12 h-12 text-blue-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No Limitation
                </h3>
                <p className="text-gray-600">
                  Generate as many blog posts as you need without any
                  restrictions or hidden fees.
                </p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Features
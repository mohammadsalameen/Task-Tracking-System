
const About = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 text-gray-800">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          About Task Tracker
        </h1>
  
        <p className="text-lg text-center text-gray-700 mb-4">
          Task Tracker is a simple and efficient tool to help you manage your daily tasks. 
          Stay organized, track progress, and boost productivity with ease.
        </p>
  
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-gray-900">📌 Task Management</h2>
            <p className="text-gray-600 mt-2">
              Easily create, update, and track your tasks with a clean and intuitive interface.
            </p>
          </div>
  
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-gray-900">⏳ Task Status</h2>
            <p className="text-gray-600 mt-2">
              View completed and pending tasks to stay on top of your priorities.
            </p>
          </div>
  
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-gray-900">🔍 Task Details</h2>
            <p className="text-gray-600 mt-2">
              Click on any task to see detailed information and track its progress.
            </p>
          </div>
  
          <div className="p-4 border rounded-lg shadow-md bg-white">
            <h2 className="text-xl font-semibold text-gray-900">🎨 Clean UI</h2>
            <p className="text-gray-600 mt-2">
              Simple and user-friendly design powered by Tailwind CSS for a smooth experience.
            </p>
          </div>
        </div>
      </div>
    );
  }
  

export default About

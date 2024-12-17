import Navbar from "@/app/components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <div className="pt-20 px-4 sm:px-0"> {/* Added padding-top to avoid overlap with Navbar */}
        <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Feel free to connect with me through any of the following options:
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Phone Number</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              +92 3151220218
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">WhatsApp</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              +92 3151220218
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">LinkedIn</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <a href="https://www.linkedin.com/in/waqarahmed1357/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                Connect on LinkedIn
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">GitHub</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <a href="https://github.com/WaqarAhmedSahito" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500">
                View GitHub Profile
              </a>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium text-gray-900">Email</dt>
            <dd className="mt-1 text-sm text-gray-700 sm:col-span-2 sm:mt-0">
              <a href="mailto:wa005423@gmail.com" className="text-indigo-600 hover:text-indigo-500">
                wa005423@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

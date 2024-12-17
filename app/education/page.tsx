import Navbar from "@/app/components/Navbar";
export default function Education() {
  return (
    <div>
      <Navbar />
      <div className="bg-white py-24 sm:py-32" >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Academic Background
            </h2>
            <p className="mt-2 text-lg/8 text-gray-600">
              My journey through education and academic achievements.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            
            {/* Matriculation */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2010-05-10" className="text-gray-500">
                  May 30, 2020
                </time>
                <a href="https://en.wikipedia.org/wiki/Matriculation" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Matriculation
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="https://www.nasraschool.edu.pk/">
                    <span className="absolute inset-0"></span>
                    Completed Matric at [Nasra School SuperHighway]
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                completed my matric in bio-medical
                </p>
              </div>
            </article>
            

            {/* College */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2013-06-20" className="text-gray-500">
                  aug 20, 2022
                </time>
                <a href="https://en.wikipedia.org/wiki/College" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  College
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Completed Collage at [Quaid-e-Azam Rangers Collage]
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                 completed my 2nd year in pre-engineering
                </p>
              </div>
            </article>

            {/* University */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2017-12-15" className="text-gray-500">
                  sep 15, 2023
                </time>
                <a href="https://en.wikipedia.org/wiki/University" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  University
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="https://www.ssuet.edu.pk/">
                    <span className="absolute inset-0"></span>
                    [Sir Syed University] – Bachelor&apos;s in [Information Technology]
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  Currently pursuing bachlor in IT at ssuet &apos; completed 2 semesters
                </p>
              </div>
            </article>

            {/* Languages */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2018-01-01" className="text-gray-500">
                  Ongoing
                </time>
                <a href="https://en.wikipedia.org/wiki/Programming_language" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Languages
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Programming Languages
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  Html , css , typescript , python , c# , c++ .
                </p>
              </div>
            </article>

            {/* Programs Enrolled */}
            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2021-07-01" className="text-gray-500">
                  aug 01, 2023
                </time>
                <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  Professional Development
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Enrolled in [Governor] – [Initiative Program]
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                 .currently studying and sharping my IT skill in this program
                </p>
              </div>
            </article>

            {/* More academic milestones... */}

          </div>
        </div>
      </div>
    </div>
  );
}

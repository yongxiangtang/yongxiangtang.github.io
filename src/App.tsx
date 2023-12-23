import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-zinc-50">
      <div className="fixed inset-0 justify-center sm:px-8">
        <div className="flex w-full mx-auto max-w-7xl lg:px-8 h-full">
          <div className="w-full bg-white ring-1 ring-zinc-100"></div>
        </div>
      </div>
      <div className="relative">
        <header>
          <div className="top-0 z-10 h-16 pt-6 sm:px-8 w-full">
            <div className="max-w-7xl mx-auto lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl mx-auto lg:max-w-5xl">
                  <div className="relative flex gap-4">
                    <div className="flex flex-1"></div>
                    <div className="flex flex-1">
                      <nav className="pointer-events-auto block">
                        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                          <li className="relative block px-3 py-2 transition hover:text-teal-500">About</li>
                          <li className="relative block px-3 py-2 transition hover:text-teal-500">Blog</li>
                          <li className="relative block px-3 py-2 transition hover:text-teal-500">Projects</li>
                        </ul>
                      </nav>
                    </div>
                    <div className="flex flex-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-0 -mb-3 pt-3 mt-32">
            <div className="max-w-7xl mx-auto lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl mx-auto lg:max-w-5xl">
                  <div className="relative">
                    <a aria-label="Home" className="block h-16 w-16 origin-left pointer-events-auto" href="/">
                      <img sizes="4rem" src="/images/profile.jpeg" className="rounded-full bg-zinc-100 object-cover h-16 w-16" alt="Yongxiang Tang" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="sm:px-8 mt-9">
            <div className="max-w-7xl mx-auto lg:px-8">
              <div className="relative px-4 sm:px-8 lg:px-12">
                <div className="max-w-2xl mx-auto lg:max-w-5xl">
                  <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">Yongxiang Tang</h1>
                  <p className="mt-6 text-base text-zinc-600">
                    Software developer based in the San Francisco Bay Area. Senior Full-Stack Software Engineer at Guidewire Software, Inc.
                  </p>
                  <div className="mt-6 flex gap-6">
                    <a className="group -m-1 p-1" aria-label="Follow on LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/yongxiang-tang-69905740">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600">
                        <path d="M 18.335 18.339 H 15.67 v -4.177 c 0 -0.996 -0.02 -2.278 -1.39 -2.278 c -1.389 0 -1.601 1.084 -1.601 2.205 v 4.25 h -2.666 V 9.75 h 2.56 v 1.17 h 0.035 c 0.358 -0.674 1.228 -1.387 2.528 -1.387 c 2.7 0 3.2 1.778 3.2 4.091 v 4.715 Z M 7.003 8.575 a 1.546 1.546 0 0 1 -1.548 -1.549 a 1.548 1.548 0 1 1 1.547 1.549 Z m 1.336 9.764 H 5.666 V 9.75 H 8.34 v 8.589 Z M 19.67 3 H 4.329 C 3.593 3 3 3.58 3 4.297 v 15.406 C 3 20.42 3.594 21 4.328 21 h 15.338 C 20.4 21 21 20.42 21 19.703 V 4.297 C 21 3.58 20.4 3 19.666 3 h 0.003 Z"></path>
                      </svg>
                    </a>
                    <a className="group -m-1 p-1" aria-label="Follow on Github" target="_blank" rel="noopener noreferrer" href="https://github.com/yongxiangtang">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path>
                      </svg>
                    </a>
                    <a className="group -m-1 p-1" aria-label="Follow on LeetCode" target="_blank" rel="noopener noreferrer" href="https://leetcode.com/yongxiang/">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80"></div>
          <div className="h-80"></div>
        </main>
        <footer className="mt-32">
          <div className="sm:px-8 mt-9">
            <div className="max-w-7xl mx-auto lg:px-8">
              <div className="border-t border-zinc-100 pt-10 pb-16">
                <div className="relative px-4 sm:px-8 lg:px-12">
                  <div className="max-w-2xl mx-auto lg:max-w-5xl">
                    <div className="flex flex-row items-center justify-between gap-6">
                      <div className="flex gap-6 text-sm font-medium text-zinc-800">
                        <a className="transition hover:text-teal-500" href="/about">About</a>
                        <a className="transition hover:text-teal-500" href="/blog">Blog</a>
                        <a className="transition hover:text-teal-500" href="/projects">Projects</a>
                      </div>
                      <p className="text-sm text-zinc-400">© 2024 Yongxiang Tang. All rights reserved.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

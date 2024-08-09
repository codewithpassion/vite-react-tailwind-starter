/* SPDX-FileCopyrightText: 2024-present Codewithpassion */
/* SPDX-License-Identifier: MIT */

import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
  return (
    <Fragment>
      <div className="grid grid-cols-[auto_1fr] grid-rows-[auto_1fr] h-screen w-screen">
        <div className="col-start-1 col-end-[-1] row-start-1 row-end-[-1] pt-[60px]">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </Fragment>
  );
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
  return (
    <Fragment>
      <Suspense>
        <div className="flex flex-col min-h-screen w-full relative">
          <div className="flex flex-col w-full relative">
            {/* Hero image background */}
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-hero-pattern" />

            {/* Header section with logo and navbar */}
            <header className="relative z-10 w-full px-10 pt-10 flex items-start min-h-[30vh] ">
              <div className='w-50 h-50 -ml-4 -mt-6'>
                {/* <Logo /> */}
              </div>
              <div className='flex-grow'></div>
              {/* <NavBar /> */}
            </header>

          </div>
          {/* Main content area */}
          <main className="flex-1">
            <div className="pt-8">
              <Outlet />
            </div>
          </main>
        </div>

      </Suspense>

    </Fragment>
  );
}

export function LandingPageLayout(): JSX.Element {
  return (
    <Fragment>
      <Suspense>
        <div className="flex flex-col min-h-screen w-full relative bg-cover bg-center bg-no-repeat bg-hero-pattern">
          <div className="flex flex-col w-full relative">
            {/* Hero image background */}
            {/* <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-hero-pattern" /> */}

            {/* Header section with logo and navbar */}
            <header className="relative z-10 w-full px-10 pt-10 flex items-start min-h-[30vh] ">
              <div className='w-50 h-50 -ml-4 -mt-6'>
                {/* <Logo /> */}
              </div>
              <div className='flex-grow'></div>
              {/* <NavBar /> */}
            </header>

          </div>
          {/* Main content area */}
          <main className="flex-1 flex flex-col container relative mx-auto">
            <div className="pt-8 bg-slate-200 w-full">
              <Outlet />
            </div>
          </main>
        </div>
      </Suspense>

    </Fragment>
  );
}
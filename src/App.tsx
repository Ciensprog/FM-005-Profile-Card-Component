import { Attribution } from '@/components/Attribution'

/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <>
      <main className="my-10 z-10">
        <div className="max-w-[21.875rem] relative rounded-2xl shadow-[0_50px_100px_-20px_rgba(8_70_94_/_0.50)] w-full">
          <img
            src="oval-top.png"
            className="absolute h-[61rem] left-0 max-w-none opacity-50 pointer-events-none rounded-full top-0 -translate-x-[82%] -translate-y-[72%] w-[61rem] -z-10"
          />
          <img
            src="oval-bottom.png"
            className="absolute h-[61rem] left-full max-w-none opacity-25 pointer-events-none rounded-full top-full -translate-x-[22%] -translate-y-[16%] w-[61rem] -z-10"
          />
          <div className="bg-slate-50 overflow-hidden rounded-2xl">
            <header className="h-[8.75rem]">
              <figure className="h-full">
                <img
                  src="banner.jpg"
                  className="h-full object-cover w-full"
                  alt="Banner"
                />
              </figure>
            </header>
          </div>
        </div>
      </main>

      <Attribution />
    </>
  )
}

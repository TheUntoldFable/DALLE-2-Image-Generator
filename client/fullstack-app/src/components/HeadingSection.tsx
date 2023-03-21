import profileImage from '../assets/images/T01PBDCHA4V-U031XAESV6Y-6dd6b8adf372-512.jpeg'
interface Props {
  onPress: () => void
}


function HeadingSection({ onPress }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:pb-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto flex max-w-2xl lg:max-w-4xl">
        <figure className="mt-auto flex flex-col items-center justify-between space-x-0 md:mt-10 md:flex-row md:space-x-20">
          <img
            className="mx-auto h-72 w-72 rounded-xl"
            src={profileImage}
            alt=""
          />

          <figcaption className="mt-10 flex flex-col items-center md:items-start">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 md:text-left">
              <p>
                “Welcome to our website, where we help turn your words into
                art!”
              </p>
            </blockquote>
            <div className="mt-4 flex flex-col ">
              <div className="font-bold text-gray-900 ">Tsvetomir Uzunov</div>
              <div className="text-gray-600">Software Developer</div>
            </div>
          </figcaption>
        </figure>
      </div>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={() => {}}
        onClick={onPress}
        className=" mx-auto mt-32 flex h-20 w-20 animate-bounce items-center justify-center rounded-full bg-slate-100 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeadingSection

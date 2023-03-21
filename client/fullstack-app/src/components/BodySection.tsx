import React, { MutableRefObject } from 'react'

interface Props {
  forwardedRef?: MutableRefObject<HTMLTableSectionElement>
}

// eslint-disable-next-line react/display-name, import/prefer-default-export
export const BodySection = React.forwardRef(({ forwardedRef }: Props) => {
  return (
    <section ref={forwardedRef} className="my-10 flex justify-center px-4">
      <h2 className="w-128 rounded-full bg-emerald-300 p-5 text-center md:text-xl">
        What do you have in mind?
      </h2>
    </section>
  )
})

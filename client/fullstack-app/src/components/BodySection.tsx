import React, {
  ChangeEvent,
  MouseEventHandler,
  MutableRefObject,
  RefObject,
  useState,
} from 'react'
import Loader from './Loader'
import { API } from '../api/api'

interface Props {
  forwardedRef: MutableRefObject<HTMLTableSectionElement | undefined>
}

function BodySection({ forwardedRef }: Props) {

  const [isLoading, setIsLoading] = useState(false)

  const [form, setForm] = useState({
    prompt: '',
    photo: '',
  })

  const onGenerateImage = async () => {
    if (form.prompt) {
      setIsLoading(true)
      try {
        const res = await API.post('/kurzgezaht/aiPost', {
          prompt: form.prompt,
        })

        setIsLoading(false)
        setForm({ ...form, photo: `data:image/jpeg;base64,${res.data.photo}` })
      } catch (error) {
        console.log(error)
        setIsLoading(false)
      }
    }
  }

  const onSubmit = () => null

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    return setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <section
      ref={forwardedRef as RefObject<HTMLTableSectionElement>}
      className="my-10 flex w-full justify-center"
    >
      <div className="flex w-full flex-col items-center justify-center space-y-9">
        <div className="flex h-44 w-full items-center justify-center bg-emerald-300 text-center">
          <h2 className="md:text-2xl">What do you have in mind?</h2>
        </div>
        <form onSubmit={onSubmit}>
          <label
            className="flex flex-col space-y-2"
            htmlFor="prompt"
            id="prompt"
          >
            Your prompt:
            <input
              className=" rounded-md border-2 border-emerald-300 p-2"
              value={form.prompt}
              id="prompt"
              type="text"
              name="prompt"
              placeholder="Please enter a prompt!"
              onChange={handleChange}
            />
          </label>
          <button
            onClick={onGenerateImage}
            type="button"
            className="text-md delay-50 mt-10 h-10 w-52 rounded-md bg-teal-400 transition ease-in-out hover:translate-y-1 hover:scale-110"
          >
            {isLoading ? (
              <Loader />
            ) : (
              <p className="animate-fade">Generate Image</p>
            )}
          </button>
        </form>

        {form.photo ? (
          <img
            alt="img"
            src={form.photo}
            className="animate-fade h-128 w-128 object-contain"
          />
        ) : (
          <div className="h-40 w-40" />
        )}
      </div>
    </section>
  )
}

export default React.forwardRef(BodySection)

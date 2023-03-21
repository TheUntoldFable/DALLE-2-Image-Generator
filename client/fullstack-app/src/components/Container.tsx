import { ContainerProps } from '../models/styleModels'

function Container(props: ContainerProps): JSX.Element {
  const { children, bg } = props

  const defaultClasses = ['container', 'mx-auto']

  return (
    <div
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={`${defaultClasses.join(' ')} ${
        bg ?? 'bg-grey-900'
      } flex h-full w-full flex-col scroll-smooth`}
    >
      {children}
    </div>
  )
}

export default Container

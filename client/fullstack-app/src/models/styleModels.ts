import { PropsWithChildren } from 'react'

export interface ContainerProps {
  children: PropsWithChildren<JSX.Element[] | JSX.Element>
  bg?: string
}

import { PropsWithChildren } from 'react'

export interface IEndProps {}

export const End = function (props: PropsWithChildren<IEndProps>) {
  return <div className={'navbar-end'}>{props.children}</div>
}

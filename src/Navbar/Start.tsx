import { PropsWithChildren } from 'react'

export interface IStartProps {}

export const Start = function (props: PropsWithChildren<IStartProps>) {
  return <div className={'navbar-start'}>{props.children}</div>
}

import { PropsWithChildren } from 'react'

interface IBrandProps {}

export const Brand = function (props: PropsWithChildren<IBrandProps>) {
  return <div className={'navbar-brand'}>{props.children}</div>
}

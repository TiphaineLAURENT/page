import { PropsWithChildren } from 'react'

interface IButtonsProps {}

export const Buttons = function (props: PropsWithChildren<IButtonsProps>) {
  return <div className={'buttons'}>{props.children}</div>
}

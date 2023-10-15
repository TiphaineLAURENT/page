import classnames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

interface IButtonProps {
  color?:
    | 'white'
    | 'light'
    | 'dark'
    | 'black'
    | 'text'
    | 'ghost'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
  tag: 'a' | 'button' | 'input'
  type?: React.HTMLInputTypeAttribute
}

const useButtonClasses = function (color: IButtonProps['color']) {
  return useMemo(() => {
    return classnames('button', { [`is-${color}`]: Boolean(color) })
  }, [color])
}

export const Button = function (props: PropsWithChildren<IButtonProps>) {
  const Tag = props.tag
  const classes = useButtonClasses(props.color)

  if (props.tag === 'input') {
    return (
      <input className={classes} type={props.type}>
        {props.children}
      </input>
    )
  }

  return <Tag className={classes}>{props.children}</Tag>
}

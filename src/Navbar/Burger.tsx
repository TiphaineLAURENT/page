import classNames from 'classnames'
import { useMemo } from 'react'

type IBurgerProps =
  | {
      active: boolean
      setActive: (active: boolean) => void
    }
  | Record<string, never>

const useBurgerClasses = function (active: IBurgerProps['active']) {
  return useMemo(() => {
    return classNames('navbar-burger', { 'is-active': Boolean(active) })
  }, [active])
}

export const Burger = function (props: IBurgerProps) {
  const classes = useBurgerClasses(props.active)

  return (
    <a
      role={'button'}
      className={classes}
      aria-label={'menu'}
      aria-expanded={props.active}
      onClick={() => props.setActive(!props.active)}
    >
      <span aria-hidden={'true'}></span>
      <span aria-hidden={'true'}></span>
      <span aria-hidden={'true'}></span>
    </a>
  )
}

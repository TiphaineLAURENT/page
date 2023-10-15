import classnames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

interface INavbarProps {
  color?: 'white' | 'light' | 'dark' | 'black' | 'primary' | 'link' | 'info' | 'success' | 'warning' | 'danger'
  fixed?: 'top' | 'bottom'
  hasShadow?: boolean
  spaced?: boolean
  transparent?: boolean
}

const useNavbarClasses = function (
  color: INavbarProps['color'],
  hasShadow: INavbarProps['hasShadow'],
  spaced: INavbarProps['spaced'],
  transparent: INavbarProps['transparent'],
  fixed: INavbarProps['fixed']
) {
  return useMemo(() => {
    return classnames('navbar', {
      [`is-${color}`]: Boolean(color),
      'is-spaced': Boolean(spaced),
      'has-shadow': Boolean(hasShadow),
      'is-transparent': Boolean(transparent),
      [`is-fixed-${fixed}`]: Boolean(fixed),
    })
  }, [color, fixed, hasShadow, spaced, transparent])
}

export const Navbar = function (props: PropsWithChildren<INavbarProps>) {
  const classes = useNavbarClasses(props.color, props.hasShadow, props.spaced, props.transparent, props.fixed)

  return (
    <nav className={classes} role={'navigation'} aria-label={'main navigation'}>
      {props.children}
    </nav>
  )
}

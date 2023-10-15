import classNames from 'classnames'
import { PropsWithChildren, useMemo, useState } from 'react'

interface IDropdownProps {
  arrowless?: boolean
  boxed?: boolean
  hoverable?: boolean
  link: string
  position?: 'left' | 'right'
  up?: boolean
}

const useDropdownItemClasses = function (
  active: boolean,
  hoverable: IDropdownProps['hoverable'],
  up: IDropdownProps['up']
) {
  return useMemo(() => {
    return classNames('navbar-item', 'has-dropdown', {
      'is-active': Boolean(active),
      'is-hoverable': Boolean(hoverable),
      'has-dropdown-up': Boolean(up),
    })
  }, [active, hoverable, up])
}

const useLinkClasses = function (arrowless: IDropdownProps['arrowless']) {
  return useMemo(() => {
    return classNames('navbar-link', { 'is-arrowless': Boolean(arrowless) })
  }, [arrowless])
}

const useDropdownClasses = function (position: IDropdownProps['position'], boxed: IDropdownProps['boxed']) {
  return useMemo(() => {
    return classNames('navbar-dropdown', {
      'is-right': position === 'right',
      'is-boxed': Boolean(boxed),
    })
  }, [boxed, position])
}

export const Dropdown = function (props: PropsWithChildren<IDropdownProps>) {
  const [opened, setOpened] = useState<boolean>(false)

  const itemClasses = useDropdownItemClasses(opened, props.hoverable, props.up)
  const linkClasses = useLinkClasses(props.arrowless)
  const dropdownClasses = useDropdownClasses(props.position, props.boxed)

  return (
    <div className={itemClasses}>
      <a className={linkClasses} onClick={() => setOpened((pendingOpened) => !pendingOpened)}>
        {props.link}
      </a>
      <div className={dropdownClasses}>{props.children}</div>
    </div>
  )
}

import classNames from 'classnames'
import { useMemo } from 'react'

import { End, IEndProps } from './End'
import { IStartProps, Start } from './Start'

interface IMenuProps {
  active?: boolean
  end: IEndProps
  start: IStartProps
}

const useMenuClasses = function (active: IMenuProps['active']) {
  return useMemo(() => {
    return classNames('navbar-menu', { 'is-active': Boolean(active) })
  }, [active])
}

export const Menu = function (props: IMenuProps) {
  const classes = useMenuClasses(props.active)

  return (
    <div className={classes}>
      <Start {...props.start} />
      <End {...props.end} />
    </div>
  )
}

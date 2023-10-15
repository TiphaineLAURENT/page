import classNames from 'classnames'
import { PropsWithChildren, useMemo } from 'react'

interface IItemProps {
  active?: boolean
  expanded?: boolean
  tab?: boolean
  tag?: 'div' | 'a'
}

const useItemClasses = function (
  expanded: IItemProps['expanded'],
  tab: IItemProps['tab'],
  active: IItemProps['active']
) {
  return useMemo(() => {
    return classNames('navbar-item', {
      'is-expanded': Boolean(expanded),
      'is-tab': Boolean(tab),
      'is-active': Boolean(active),
    })
  }, [active, expanded, tab])
}

export const Item = function (props: PropsWithChildren<IItemProps>) {
  const Tag = props.tag ?? 'a'
  const classes = useItemClasses(props.expanded, props.tab, props.active)

  return <Tag className={classes}>{props.children}</Tag>
}

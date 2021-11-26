import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { usePrefixCls } from '@gio-design/utils';
import { CardProps } from './interfaces';
import WithRef from '../utils/withRef';

const CardMeta = WithRef<HTMLDivElement, HTMLAttributes<CardProps>>(
  (
    {
      disabled = false,
      clickable = true,
      children,
      title,
      className,
      prefixCls: customizePrefixCls,
      ...restProps
    }: CardProps,
    ref?
  ) => {
    const prefixCls = usePrefixCls('card-new', customizePrefixCls);
    const cardClassName = classNames(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-clickable`]: clickable,
    });
    const renderTitle = title && <div className={`${prefixCls}-title`} />;
    return (
      <div className={cardClassName} ref={ref} {...restProps}>
        {renderTitle}
        {children}
      </div>
    );
  }
);
export default CardMeta;

import React, { HTMLAttributes } from 'react';
import { usePrefixCls } from '@gio-design/utils';
import classNames from 'classnames';
import { isString } from 'lodash/fp';
import { CardMetaProps } from './interfaces';

const CardMeta: React.FC<HTMLAttributes<HTMLDivElement> & CardMetaProps> = ({
  image = '',
  children,
  title,
  description,
  action,
  fullWidthContent,
  ...resetProps
}: CardMetaProps) => {
  const prefixCls = usePrefixCls('card-meta-new');

  const renderImage = () => {
    if (isString(image)) return image ? <img src={image} className={`${prefixCls}-image`} alt="" /> : null;
    return React.cloneElement(image, { className: classNames(`${prefixCls}-image`, image.props.className) });
  };

  const renderDetail = () =>
    (title || description) && (
      <div className={`${prefixCls}-detail`}>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {description && <div className={`${prefixCls}-description`}>{description}</div>}
      </div>
    );
  const renderAction = () => (title || description || image) && <div className={`${prefixCls}-action`}>{action}</div>;

  const renderHeader = (title || description || image) && (
    <div className={`${prefixCls}-metaHeader`}>
      {renderImage()}
      {renderDetail()}
      {renderAction()}
    </div>
  );

  const renderContent = children ? <div className={`${prefixCls}-content`}>{children}</div> : null;

  return (
    <div
      className={`${classNames(prefixCls, {
        [`${prefixCls}-fullWidthContent`]: fullWidthContent,
      })}`}
      {...resetProps}
    >
      {renderHeader}
      {renderContent}
    </div>
  );
};
export default CardMeta;

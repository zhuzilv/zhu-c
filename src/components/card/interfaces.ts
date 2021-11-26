import React from 'react';

export interface CardMetaProps {
  /**
   * 图片url或react
   */
  image?: React.ReactElement | string;
  /**
   * meta标题
   */
  title?: string;
  /**
   * meta副标题
   */
  description?: string;
  /**
   * meta内容
   */
  children?: React.ReactNode;
  /**
   * 右侧触发器
   */
  action?: React.ReactNode;
  /**
   * 是否宽度平铺
   */
  fullWidthContent?: boolean;
}

export interface CardProps {
  /**
   * 不可选
   */
  disabled?: boolean;
  /**
   * 卡片内容
   */
  children?: React.ReactNode;
  /**
   * 看片标题
   */
  title?: string;
  /**
   * 卡片是否可点击
   */
  clickable?: boolean;
  /**
   * 自定义className前缀
   */
  prefixCls?: string;
  /**
   * 自定义className
   */
  className?: string;
}

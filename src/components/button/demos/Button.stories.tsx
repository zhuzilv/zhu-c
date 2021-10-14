import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { Button } from '../Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // 自定义控制类型
  argTypes: {
    
     onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    // size: { control:enum}
    size: {
      // 有选项设置选项，
      options: ['large', 'small'],
      // 设置type
      control: { type: 'radio' } // Automatically inferred when 'options' is defined
    },
    label: {
      // options: ['large', 'small'],
      control: { type: 'text' } 
    },
    width: { 
      control: { type: 'range', min: 400, max: 1200, step: 50 },
    },
  },
  // 页面静态数据
  parameters: {
    // docs: { 
    //   // page: null 
    // },
    docs: {
      page: () => (
        <>
          <Title> 我只是个title</Title>
          <Subtitle>Subtitle</Subtitle>
          <Description>Description</Description>
          <Primary>Primary</Primary>
          <Stories>Stories</Stories>
          <ArgsTable story={PRIMARY_STORY} />

        </>
      ),
    },
 parameters: { actions: { argTypesRegex: '^on.*' } },
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ],
    },
  },
  // 全部组件的args
  args: {
    //👇 Now all Button stories will be primary.
    primary: true,
  },

  //外层包装器
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }} >
        {/* <Story /> */}
        {Story()}
      </div>
    ),
  ],

} as ComponentMeta<typeof Button>;
console.log(typeof Button,'typeof Button')
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (a) => <Button {...a} />;
const Gql: any = {
  name: '用户量',
  chartType: 'bar',
  attrs: {},
  dimensions: ['city'],
  filter: null,
  granularities: [{ id: 'tm', interval: 3600000 }, { id: 'city', top: 5 }],
  limit: 20,
  metrics: [{ id: 'uc', name: '用户量', type: 'prepared' }],
  orders: null,
  timeRange: 'day:8,1',
  targetUser: 'uv',
  skip: 0,
  compProps: {
    // isFact: true,
    factTitle: '用户量统计',
    showXAxisTitle: true,
    showYAxisTitle: true,
    isFrequency: false,
  },
};
const Response = {
  data: [['北京', 5483.0], ['上海', 3260.0], ['未知', 2362.0], ['深圳', 2137.0], ['广州', 1538.0]],
  meta: {
    columns: [
      { id: 'city', name: '城市', isDim: true, isRate: false, isDuration: false },
      { id: 'uc', name: '用户量', isDim: false, isRate: false, isDuration: false },
    ],
  },
};
const LayoutTemplate: any = (args) => {
  return <>
    <header>miaoshu</header>
    <header>miaoshu</header>
    
    <Button {...args} />
    <header>miaoshu</header>
    
    <Button {...args} />
    <header>miaoshu</header>
    
   <Button {...args} />
  </>
}





export const cc = LayoutTemplate.bind({});
// 更改名字zv
// cc.storyName = 'I am the primary';
cc.args = {
  label: 'Button',
};
// const args={
//     primary: true,
//     label: 'Button',
//   }
export const Primary1 = Template.bind({});
// export const Primary = () => <Button primary label='button'></Button>;
// More on args: https://storybook.js.org/docs/react/writing-stories/args
// args 就是control 中控制的键值对
Primary1.args = {
  primary: true,
  label: 'Button',
};
// Primary({
//   primary: true,
//   label: 'Button',
// });
export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

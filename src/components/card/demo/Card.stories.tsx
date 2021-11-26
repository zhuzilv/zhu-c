import React from 'react';
import { MoreOutlined } from '@gio-design/icons';
import { Story, Meta } from '@storybook/react/types-6-0';
import Docs from './CardPage';
import { CardProps } from '../interfaces';
import '../style';
import Avatar from '../../avatar';
import Card from '../index';
import Table from '../../table';
import Tabs, { Tab } from '../../tabs';
import Button, { IconButton } from '../../button';
import Dropdown from '../../dropdown';
import { Item, List } from '../../list';
import { Basic, Empty, TreeData } from '../../table/demos/Table.stories';
import { HaveChildren } from '../../tabs/demos/Tabs.stories';
import { Divider } from '../..';

export default {
  title: 'upgraded/Card',
  component: Card,
  subcomponents: { CardMeta: Card.Meta },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/lLYusioN7e9ifkQnIXeT4G/GIO-Design-(Running-File)?node-id=4092%3A41174',
      allowFullscreen: true,
    },
    docs: {
      page: Docs,
    },
  },
} as Meta;

const DemoTemplate = () => (
  <div>
    <div style={{ margin: '20px', display: 'inline-block' }}>
      <Card title="卡片标题">
        <Card.Meta
          image={<Avatar>L</Avatar>}
          title="卡片标题"
          description="卡片副标题"
          action={
            <Dropdown
              placement="bottomRight"
              content={
                <List>
                  <Item value="1">111111</Item>
                  <Item value="2">222222</Item>
                </List>
              }
            >
              <IconButton size="small" type="text">
                <MoreOutlined />
              </IconButton>
            </Dropdown>
          }
        />
        <Card.Meta fullWidthContent>
          <Basic />
        </Card.Meta>
      </Card>
    </div>
    <div style={{ margin: '20px', display: 'inline-block' }}>
      <Card>
        <Card.Meta title="变量使用量" description="variable_userd" />
        <Card.Meta>
          <Empty />
        </Card.Meta>
        <Card.Meta>
          <TreeData />
        </Card.Meta>
      </Card>
    </div>
    <div style={{ margin: '20px', display: 'inline-block' }}>
      <Card>
        <Card.Meta title="变量使用量" description="variable_userd" />
        <Card.Meta>
          <HaveChildren />
        </Card.Meta>
      </Card>
    </div>
  </div>
);

export const Demo = DemoTemplate.bind({});
const infoCardTemplate = () => (
  <Card>
    <Card.Meta title="InfoCard" action={<Button>button</Button>} />
    <Card.Meta fullWidthContent>
      <Divider />
      <Basic />
    </Card.Meta>
  </Card>
);

export const infoCard = infoCardTemplate.bind({});
const tableCardTemplate = () => (
  <Card>
    <Card.Meta
      title="全部成员(233"
      description="这是一个副标题这是一个副标题这是一个副标题这是一个副标题这是一个副标题"
    />
    <Card.Meta fullWidthContent>
      <Tabs
        tabListStyle={{
          borderBottom: '1px solid #dfe4ee',
        }}
        defaultValue="1"
      >
        <Tab label="成员" value="1">
          <Basic />
        </Tab>
        <Tab label="权限" value="2">
          <Empty />
        </Tab>
      </Tabs>
    </Card.Meta>
  </Card>
);

export const tableCard = tableCardTemplate.bind({});

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  style: { width: 320 },
  children: (
    <>
      <Card.Meta
        image={<Avatar>L</Avatar>}
        title="卡片标题"
        description="卡片副标题"
        action={
          <Dropdown
            placement="bottomRight"
            content={
              <List>
                <Item value="1">111111</Item>
                <Item value="2">222222</Item>
              </List>
            }
          >
            <IconButton size="small" type="text">
              <MoreOutlined />
            </IconButton>
          </Dropdown>
        }
      />
    </>
  ),
};

export const Disabled = Template.bind({});

Disabled.args = {
  style: { width: 320 },
  disabled: true,
  children: (
    <>
      <Card.Meta image={<Avatar>L</Avatar>} title="卡片标题" description="卡片副标题">
        这里是卡片的描述，可以有很多很多字。这里是卡片的描述，可以有很多很多字。这里是卡片的描述，可以有很多很多字。
      </Card.Meta>
    </>
  ),
};

export const Multiple = Template.bind({});

Multiple.args = {
  disabled: false,
  onClick: () => ({}),
  clickable: true,
  style: { width: 320 },
  children: (
    <>
      <Card.Meta image={<Avatar>L</Avatar>} title="卡片标题" description="卡片副标题" action={<Button>提交</Button>}>
        这里是卡片的描述，可以有很多很多字。这里是卡片的描述，可以有很多很多字。这里是卡片的描述，可以有很多很多字。
      </Card.Meta>
      <Card.Meta>
        <Table
          pagination={false}
          dataSource={[
            { a: 1, b: 1 },
            { a: 2, b: 2 },
          ]}
          columns={[
            { dataIndex: 'a', title: 'A' },
            { dataIndex: 'b', title: 'B' },
          ]}
        />
      </Card.Meta>
    </>
  ),
};

export const onlyDes = Template.bind({});

onlyDes.args = {
  footer: <Button size="small">按钮</Button>,
  disabled: false,
  onClick: () => ({}),
  clickable: false,
  style: { width: 320 },
  children: (
    <>
      <Card.Meta
        action={
          <Dropdown
            placement="bottomRight"
            content={
              <List>
                <Item value="1">111111</Item>
                <Item value="2">222222</Item>
              </List>
            }
          >
            <IconButton size="small" type="text">
              <MoreOutlined />
            </IconButton>
          </Dropdown>
        }
      >
        这里是卡片的描述，可以有很多很多字。这里是卡片的描述，可以有很多很多字。这里是卡片的描述，可以有很多很多字。
      </Card.Meta>
      <Card.Meta>
        <Table
          dataSource={[
            { a: 1, b: 1 },
            { a: 2, b: 2 },
          ]}
          columns={[
            { dataIndex: 'a', title: 'A' },
            { dataIndex: 'b', title: 'B' },
          ]}
        />
      </Card.Meta>
    </>
  ),
};

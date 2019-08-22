/*
 * ComponentsPage
 *
 * List all components
 */
import React from 'react';
import styled from 'styled-components';
import { BackTop } from 'antd';
import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Card from '../../components/Card';
import Content from '../../components/Content';
import ImagePie from '../../components/ImagePie';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import Footer from '../../components/Footer';
import MyLink from '../../components/Link';

import { siteConfig } from '../../config';


const Wrapper = styled.div` 
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  margin: 4em auto;
  padding:0 4em;
`;

const listData = [
  {
    iconUrl: 'https://www.rsk.co/wp-content/uploads/2018/12/iconmonstr-gittert-4-48.png',
    content: 'Wallet API',
    link: 'https://www.rsk.co/',
  },
  {
    iconUrl: 'https://www.rsk.co/wp-content/uploads/2018/12/iconmonstr-gittert-4-48.png',
    content: 'RSK Explorer',
    link: 'https://www.rsk.co/',
  },
  {
    iconUrl: 'https://www.rsk.co/wp-content/uploads/2018/12/iconmonstr-gittert-4-48.png',
    content: 'RSK Stats',
    link: 'https://www.rsk.co/',
  },
];

const footerMenuData = [
  {
    name: 'Home',
    url: 'https://www.rsk.co/',
  },
  {
    name: 'RSK',
    url: 'https://www.rsk.co/',
  },
  {
    name: 'RIFOS',
    url: 'https://www.rsk.co/',
  },
  {
    name: 'Community',
    url: 'https://www.rsk.co/',
  },
];
const ListItems = listData.map((item) => (<ListItem key={item.content} link={item.link} iconUrl={item.iconUrl} content={item.content} />));

const Logo = <img height="40px" width="auto" src="https://files.readme.io/c8e016f-rsk1.png" alt="logo" />;
const FooterText = <Content style={{ fontWeight: 300, fontSize: '12px' }}>{siteConfig.footerText}</Content>;
const IconGroupItems = listData.map((item) => <Link key={item.content} to={item.link}><ImagePie hasShadow={false} height="16px" width="16px" style={{ backgroundImage: `url(${item.iconUrl})` }} /></Link>);
const MenuItems = footerMenuData.map((item) => <MyLink key={item.name} link={item.link} content={item.name}></MyLink>);


export default function ComponentsPage() {
  return (
    <div>
      <Title>Solid Button</Title>
      <Wrapper>
        <Button isSolid hasShadow height="50px" width="200px">
          Quick Start
        </Button>
      </Wrapper>

      <Title>Hollow Button</Title>
      <Wrapper>
        <Button height="50px" width="200px">
          Quick Start
        </Button>
      </Wrapper>

      <Title>Pic Card</Title>
      <Wrapper>
        <Card
          height="300px"
          width="500px"
          hasShadow
          style={{
            backgroundImage:
              'url(https://www.rsk.co/wp-content/uploads/2019/02/rsk-home-partners-1.jpg)',
          }}
        >
        </Card>
      </Wrapper>
      <Title>Text Card</Title>
      <Wrapper>
        <Card
          height="300px"
          width="500px"
          hasShadow
        >
          <Content>
          The RSK Innovation Studio is singularly focused on balancing
          innovation with usability. Created as a joint venture between Monday
          Capital and RSK , it acts as a skunkworks at the intersection of
          scaling businesses and developing tools for the Bitcoin ecosystem.
          </Content>
        </Card>
      </Wrapper>

      <Title>Content</Title>
      <Wrapper>
        <Content>
          The RSK Innovation Studio is singularly focused on balancing
          innovation with usability. Created as a joint venture between Monday
          Capital and RSK , it acts as a skunkworks at the intersection of
          scaling businesses and developing tools for the Bitcoin ecosystem.
        </Content>
      </Wrapper>

      <Title>Content Contained Highlight Words</Title>
      <Wrapper>
        <Content>
          The RSK Innovation Studio is singularly focused on balancing
          innovation with usability. Created as a joint venture between *Monday
          Capital* and *RSK* , it acts as a skunkworks at the intersection of
          scaling businesses and developing tools for the Bitcoin ecosystem.
        </Content>
      </Wrapper>

      <Title>Image Pie</Title>
      <Wrapper>
        <ImagePie height="100px" width="100px" hasShadow style={{ backgroundImage: 'url(https://www.rsk.co/wp-content/uploads/2018/12/RSK_get-started-03-3.png)' }} />
      </Wrapper>
      <BackTop />

      <Title>Image Pie (square)</Title>
      <Wrapper>
        <ImagePie height="100px" width="100px" radius="20px" hasShadow style={{ backgroundImage: 'url(https://www.rsk.co/wp-content/uploads/2018/12/RSK_get-started-03-3.png)' }} />
      </Wrapper>

      <Title>List & ListItem </Title>
      <Wrapper>
        <div style={{ width: '300px' }}>
          <List title="Tools & Libraries" items={ListItems} />
        </div>
      </Wrapper>
      <Footer Logo={Logo} FooterText={FooterText} IconGroupItems={IconGroupItems} MenuItems={MenuItems} />
      <BackTop />

    </div>
  );
}

/*
 * ComponentsPage
 *
 * List all components
 */
import React from 'react';
import styled from 'styled-components';
// import { FormattedMessage } from 'react-intl';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Card from '../../components/Card';
import Content from '../../components/Content';

const Wrapper = styled.div` 
  display: flex;
  justify-content:center;
  width: 100%;
  text-align: center;
  margin: 4em auto;
  padding:0 4em;
`;

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
    </div>
  );
}

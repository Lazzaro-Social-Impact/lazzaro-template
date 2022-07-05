import {
  FacebookFilled,
  InstagramOutlined,
  LinkedinOutlined,
  PhoneFilled,
  TwitterOutlined,
} from '@ant-design/icons'
import {
  Col, Layout, Row, Typography
} from 'antd'
import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'

export default function Footer(): ReactElement {
  const globalColor = useTheme()
  return (
    <>
      <CustomFooter>
        <CustomRow>
          <Col md={6} sm={24}>
            <div style={{ position: 'relative' }}>
              <Circle />
              <Link to="/">Give</Link>
            </div>
          </Col>

          <Col md={8} sm={24}>
            <Typography.Title style={{ color: 'white', fontSize: '2.8rem', fontWeight: 400 }}>
              How Can we Help? Contact us anytime
            </Typography.Title>
          </Col>

          <CustomCol md={5} sm={24}>
            <Contact>
              <PhoneFilled style={{ color: `${globalColor}` }} />
              <Typography.Text style={{
                color: 'white',
                fontSize: '0.9rem'
              }}
              >092312313
              </Typography.Text>
            </Contact>

            <Contact>
              <PhoneFilled style={{ color: `${globalColor}` }} />
              <Typography.Text style={{
                color: 'white',
                fontSize: '0.9rem'
              }}
              >092312313
              </Typography.Text>
            </Contact>
          </CustomCol>
        </CustomRow>
      </CustomFooter>

      <SubFooter>
        <Typography.Paragraph style={{ color: '#969696', marginBottom: '0' }}>
          Lorem Ipsum is simply dummy text
        </Typography.Paragraph>

        <Icons>
          <FaceBookIcon />
          <TwitterOutlined />
          <InstagramOutlined />
          <LinkedinOutlined />
        </Icons>
      </SubFooter>
    </>
  )
}

const Link = styled(NavLink)`
  font-size: 30px;
  color: white;
  letter-spacing: 3px;
  position: relative;
  z-index: 211;
`

const Circle = styled.span`
  position: absolute;
  width: 4em;
  z-index: 1;
  background-color: #5cb780;
  border-radius: 50%;
  height: 4em;
  left: -1.4em;
  top: -0.2em;
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: start;
  margin-left: 1.2rem;
  padding: 0.3rem;
`

const Icons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  align-items: center;
  margin-right: 4rem;

  span {
    transition: all 0.3s ease-in-out;
    color: white;
    cursor: pointer;
  }

  span:hover {
    background-color: green;
    border-radius: 50%;
    padding: 0.7rem;
  }
`

const CustomFooter = styled(Layout.Footer)`
  background-color: #424242;
  margin-top: 4rem;
  color: white;
  padding: 3.2rem 4.1rem;
`

const SubFooter = styled.div`
  background-color: #0e0e0e;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 2em;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const CustomRow = styled(Row)`
  align-items: center;
  gap: 5rem;
  justify-content: center;
  align-content: center;
`

const CustomCol = styled(Col)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #2e2e2e;
  padding: 0.3rem;
  font-size: 1.5em;
`

const FaceBookIcon = styled(FacebookFilled)`
  background-color: green;
  border-radius: 50%;
  padding: 0.7rem;
`

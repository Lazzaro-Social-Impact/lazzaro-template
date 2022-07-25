import {
  Tabs, Modal
} from 'antd'
import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { ClockCircleFilled, HeatMapOutlined } from '@ant-design/icons'
import { Footer, Navbar } from '../../components'
import { BuyEventform } from '../../components/Forms/BuyEventform'
import { ContactEventForm } from '../../components/Forms/ContactEventForm'
import { EventCarousel } from '../../components/EventCarousel/EventCarousel'

export function SingleEvent(): ReactElement {
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setVisible(false)
  }
  return (
    <>
      <Navbar />
      <Container>
        <Event>
          <EventCarousel />
          <EventTitle>
            Deluling is the world best
          </EventTitle>
          <EventDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, doloremque.
            Totam nemo ipsam libero vero, corporis ullam eligendi! Tenetur vero consequatur
            quaerat, perspiciatis id accusamus eos temporibus nisi expedita obcaecati illo
            nostrum perferendis consequuntur, quos incidunt saepe possimus repellat. Consectetur,
            officiis, accusantium sit mollitia, voluptates tempora eos est nobis explicabo sint
            corporis aperiam neque? Aliquid officiis natus nam temporibus possimus et voluptatum

          </EventDescription>

          <CustomTabs defaultActiveKey="1">
            <Tabs.TabPane tab="Buy" key="1">
              <BuyEventform />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Location" key="2">
              {/* Google Map frame  */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.89841008982!2d-12
                2.420735684699!3d37.774929379881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
                1!3m3!1m2!1s0x808580f8f8f8f8f7%3A0x8f8f8f8f8f8f8f8f!2sDeluling%20is%20t
                he%20world%20best!5e0!3m2!1sen!2sus!4v1588010981209!5m2!1sen!2sus`}
                width="100%"
                height="450"
                frameBorder="0"
                style={{ border: 0 }}
                aria-hidden="false"
                title="google-map"
              />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="3">
              <ContactEventForm />
            </Tabs.TabPane>
          </CustomTabs>
        </Event>
        <OtherEvents>
          <EventCard>
            <EventCardTitle>
              Deluling is the world best
            </EventCardTitle>
            <EventDate>
              <ClockCircleFilled /> 8th August 2020 - 8:00pm
            </EventDate>
            <EventLocation>
              <HeatMapOutlined />
              Online
            </EventLocation>
            <EventTickets>
              Tickets available: <span>15</span>
            </EventTickets>
            <EventCardButtons>
              <ShareButton>
                Share
              </ShareButton>
              <BuyButton onClick={showModal}>
                Buy
              </BuyButton>
              <Modal
                title="Buy Tickets"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                footer={null}
                width="50%"
              >
                <EventCarousel />
                <BuyEventform modal />
              </Modal>
            </EventCardButtons>
          </EventCard>
        </OtherEvents>
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 0 10.2rem;
    gap: 1.8rem;
    margin-top: 3.2rem;
`

const Event = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 800px;
`

const EventTitle = styled.h2`
   color: black;
   margin-bottom: 0;
   font-size: 1.6rem;
   font-weight: bold;
   margin-top: 1.8rem;
`

const EventDescription = styled.p`
  color: #8c8c8c;
  margin-top: 0.4rem;
  font-size: 1rem;
`

const OtherEvents = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const EventCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 2.4rem 1.8rem;
    border: 1px solid #e6e6e6;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    height: 420px;

`

const EventCardTitle = styled.h3`
    color: green;
    font-size: 1.8rem;
    font-weight: 600;
    width: 90%;
    
`

const EventLocation = styled.p`
    color: #8c8c8c;
    span {
        margin-right: 0.4rem;
    }
`

const EventDate = styled.p`
    color: #8c8c8c;
    `

const EventTickets = styled.p`
    color: #8c8c8c;
    font-weight: bold;
    font-size: 1.1rem;
    margin-bottom: 0;
    `

const EventCardButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2.8rem;
`

const ShareButton = styled.button`
    background-color: #ccc;
    color: #444;
    border-radius: 25px;
    padding: 0.8rem 2.2rem;
    border: none;
    cursor: pointer;
`

const BuyButton = styled.button`
    background-color: green;
    color: white;
    border-radius: 25px;
    padding: 0.8rem 2.2rem;
    border: none;
    cursor: pointer;

`

const CustomTabs = styled(Tabs)`
 .ant-tabs-nav-wrap {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
 }

 .ant-tabs-nav-list {
    width: 100%;
    justify-content: space-around;
 }

 .ant-tabs-tab-btn {
    font-size: 1rem;
    font-weight: 600;
 }
`

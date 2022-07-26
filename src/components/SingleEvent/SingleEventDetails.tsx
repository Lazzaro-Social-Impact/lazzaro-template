import React, { ReactElement } from 'react'
import styled from 'styled-components'
import {
  Tabs
} from 'antd'
import { BuyEventform } from '../Forms/BuyEventform'
import { ContactEventForm } from '../Forms/ContactEventForm'
import { EventCarousel } from '../EventCarousel/EventCarousel'

export function SingleEventDetails(): ReactElement {
  return (
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
  )
}

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
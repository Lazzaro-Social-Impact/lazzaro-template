import { ReactElement } from 'react'
import { Tabs } from 'antd'
import { useParams } from 'react-router-dom'
import HtmlParser from 'react-html-parser'
import styled from 'styled-components'
import { useDependant } from '../../hooks'
import { getEventURL, getEventImages } from '../../api/getApiServices'
import { BuyEventform } from '../Forms/BuyEventform'
import { ContactEventForm } from '../Forms/ContactEventForm'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import Skeleton from '../Skeleton'

interface IEvent {
  title: string;
  description: string;
  location: string;
}
interface IImages {
  id: string;
  img_url: string;
}

export function SingleEventDetails(): ReactElement {
  const { id } = useParams() as { id: string }
  const {
    data: event, isLoading: isLoadingEvent
  } = useDependant<IEvent>(getEventURL(id), [`event-details-${id}`], id)
  const {
    data: images = [], isLoading
  } = useDependant<IImages[]>(getEventImages(id), ['event_images'], id)
  return (
    <>
      {isLoadingEvent && <Skeleton number={1} height={40} width={60} />}
      {!isLoadingEvent && (
      <Event>
        <EventCarousel imgs={images} isLoading={isLoading} />
        <EventTitle>
          {event?.title}
        </EventTitle>
          {HtmlParser(event?.description || '')}

        <CustomTabs defaultActiveKey="1">
          <Tabs.TabPane tab="Buy" key="1">
            <BuyEventform eventId={id} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Location" key="2">
            {/* Google Map frame  */}
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151
                     .89841008982!2d-122.4207305!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1
                     024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f65e9b%3A0x24a8c2b1f872403a!2s
                     ${event?.location}!5e0!3m2!1sen!2sin!4v1574670105811!5m2!1sen!2sin`}
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              aria-hidden="false"
              title="google-map"
            />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Contact" key="3">
            <ContactEventForm id={id} />
          </Tabs.TabPane>
        </CustomTabs>
      </Event>
      )}
    </>
  )
}

const Event = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 920px;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
`

const EventTitle = styled.h2`
   color: black;
   margin-bottom: 0;
   font-size: 1.6rem;
   font-weight: bold;
   margin-top: 1.8rem;
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

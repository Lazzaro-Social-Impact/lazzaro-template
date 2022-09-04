import { ReactElement } from 'react'
import { Tabs } from 'antd'

import HtmlParser from 'html-react-parser'

import styled from 'styled-components'
import { useAppSelector, useDependant, useGeocoding } from '../../hooks'
import { getEventImages } from '../../api/getApiServices'
import { BuyEventform } from '../Forms/BuyEventform'
import { ContactEventForm } from '../Forms/ContactEventForm'
import { EventCarousel } from '../EventCarousel/EventCarousel'
import Skeleton from '../Skeleton'
import { IEvent, IImage } from '../../types/interfaces'
import Map from '../Map'

export function SingleEventDetails({ event, id, isLoadingEvent }
  : { event: IEvent | undefined, id: string, isLoadingEvent: boolean }): ReactElement {
  const {
    data: images = [], isLoading
  } = useDependant<IImage[]>(getEventImages(id), ['event_images'], id)
  const address = useAppSelector(({ ong }) => ong.ongConfig?.contact.address) || ''

  const { lat, lng } = useGeocoding(address)

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
          {event?.location !== 'online' && (
            <Tabs.TabPane tab="Location" key="2">
              <Map lat={lat} lng={lng} height={28} />
            </Tabs.TabPane>
          )}
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
    width: 60%;
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

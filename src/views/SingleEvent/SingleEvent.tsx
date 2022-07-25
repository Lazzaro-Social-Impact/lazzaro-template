import { Carousel, Tabs } from 'antd'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { ClockCircleFilled, HeatMapOutlined } from '@ant-design/icons'
import { Footer, Navbar } from '../../components'
import { BuyEventform } from '../../components/Forms/BuyEventform'
import { ContactEventForm } from '../../components/Forms/ContactEventForm'

export function SingleEvent(): ReactElement {
  return (
    <>
      <Navbar />
      <Container>
        <Event>
          <Carousel>
            <ImageContainer>
              <img src="https://via.placeholder.com/817x420" alt="" />
            </ImageContainer>
            <ImageContainer>
              <img src="https://picsum.photos/200/300" alt="" />
            </ImageContainer>
            <ImageContainer>
              <img src="https://picsum.photos/200/300" alt="" />
            </ImageContainer>
          </Carousel>
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
            nihil neque assumenda labore cum placeat, similique, cumque incidunt quasi? Voluptatem
            veritatis molestias nostrum ipsa maiores nesciunt libero non iste reprehenderit
            , in deleniti minima hic quibusdam, adipisci incidunt nemo architecto!
            Debitis hic voluptate omnis asperiores dicta, et error!
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
              <BuyButton>
                Buy
              </BuyButton>
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
const ImageContainer = styled.div`
    width: 817px;
    height: 420px;

    img {
        max-width: 100%;
        width: 100%;
        height: 420px;
    }
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
   font-weight: bold;
`

const EventDescription = styled.p`
  color: #8c8c8c;
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
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    height: 420px;

`

const EventCardTitle = styled.h3`
    color: green;
    font-size: 1.8rem;
    font-weight: 600;
    
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
    `

const EventCardButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3.8rem;
`

const ShareButton = styled.button`
    background-color: #ccc;
    color: #444;
    border-radius: 20px;
    padding: 0.6rem 1.8rem;
    border: none;
    cursor: pointer;
`

const BuyButton = styled.button`
    background-color: green;
    color: white;
    border-radius: 20px;
    padding: 0.6rem 1.8rem;
    border: none;
    cursor: pointer;

`

const CustomTabs = styled(Tabs)`
 .ant-tabs-nav-wrap {
    display: flex !important;
    justify-content: center !important;
    width: 100% !important;
 }
`

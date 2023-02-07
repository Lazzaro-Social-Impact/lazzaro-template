import { ReactElement } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import HtmlParser from 'html-react-parser';

import { useNavigate } from 'react-router-dom';
import { CalendarIcon } from '../../Icons';
import { Box, Flex } from '../../common';
import { useAppSelector } from '../../../hooks';

interface IProps {
  id: string;
  title: string;
  description: string;
  start_time: string;
  EventTickets: any;
}

export default function EventsRow(props: IProps): ReactElement {
  const { id, title, description = '', start_time: startTime, EventTickets } = props;

  const day = moment(startTime).format('DD');
  const navigate = useNavigate();
  const navigateTo = (path: string) => () => navigate(path);
  const prices = EventTickets.map((ticket: any) => ticket.price);
  const lowestPrice = Math.min(...prices);
  const currency = useAppSelector((state) => state.ong.ongConfig?.platformConfig.currency_symbol) || '€';

  return (
    <CustomBox cursor='pointer' p={1} onClick={navigateTo(`/events/${id}`)}>
      <FlexCard justify='center' align='flex-start' px={3} py={1}>
        <Box>
          <CalendarIcon size='4em' date={day} />
        </Box>

        <Box flex={1} px={2}>
          <Title>{title}</Title>
          <Box fontSize={1.1} lineHeight={1.5}>
            {HtmlParser(description.slice(0, 120))}
            {lowestPrice && (
              <p style={{ fontSize: '0.8rem' }}>
                From{' '}
                <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                  {lowestPrice} {currency}
                </span>
              </p>
            )}
          </Box>
        </Box>
      </FlexCard>
    </CustomBox>
  );
}

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: bold;

  @media (max-width: 769px) {
    font-size: 1.8rem;
  }
`;
const CustomBox = styled(Box)`
  border: 1px solid transparent;
  transition: all 0.2s ease-in-out;
  width: 100%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
  &:hover {
    border: 1px solid ${({ theme }) => theme.primary};
    border-radius: 10px;
    box-shadow: none;
  }
`;
const FlexCard = styled(Flex)`
  text-align: left;
  @media (max-width: 769px) {
    margin-top: 3rem;
    flex-wrap: nowrap;
  }
`;

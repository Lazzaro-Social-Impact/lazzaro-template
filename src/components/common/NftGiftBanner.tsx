import { type ReactElement } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import nftGiftImage from '../../../public/assets/img/nftGift.png';
import Button from './Button';
import Image from './Image';

type Props = { amount: number; currencySymbol: string };

function NftGift({ amount, currencySymbol }: Props): ReactElement {
  const { t } = useTranslation();

  const handleClick = () => {
    console.log('discovered');
  };
  return (
    <Container>
      <ImageContainer>
        <Image src={nftGiftImage} />
      </ImageContainer>

      <P>
        {t('donation_greater_than')} {amount}
        {currencySymbol} <br /> {t('nft_as_gift')}
      </P>

      <Button onClick={handleClick}>{t('discover')}</Button>
    </Container>
  );
}

export default NftGift;

const Container = styled.section`
  background-color: #a0a7b9;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem 2rem;
  position: relative;
`;

const ImageContainer = styled.div`
  max-width: 140px;
  position: relative;
  top: -4.5rem;
  img {
    width: 100%;
  }
`;

const P = styled.p`
  font-weight: bold;
  font-size: 1.7rem;
  color: #ffffff;
  text-align: center;
  margin-right: auto;
`;

import HtmlParser from 'html-react-parser';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Flex, Link, SectionTitle } from '../common';
import { useAppSelector } from '../../hooks';
import { LazyImageComponent } from '../common/LazyImage';

export default function AboutUs(): React.ReactElement {
  const {
    description = '',
    img_url: imgUrl,
    title_description: titleDescription,
  } = useAppSelector(({ ong }) => ong.ongConfig?.description) || {};
  const { t } = useTranslation();
  return (
    <CustomFlex id='about' align='stretch' mt={4.2} pl={4.1}>
      <Flex
        direction='column'
        align='stretch'
        justify='stretch'
        textAlign='left'
        flex={1}
        style={{ overflow: 'hidden' }}
      >
        <SectionTitle marginTop={0} marginBottom={0.6} padding={0.2} fontSize={2.2}>
          {titleDescription}
        </SectionTitle>

        <Flex justify='flex-start' textAlign='left'>
          <Description>{HtmlParser(description)}</Description>

          <Link to='/about' underlined align='center' mt={1} style={{ width: '100%' }}>
            {t('Read More')}
          </Link>
        </Flex>
      </Flex>

      <Flex justify='flex-end' align='flex-start' flex={1}>
        <AboutUsImage src={imgUrl} alt='About us' placeholderSrc={imgUrl} />
      </Flex>
    </CustomFlex>
  );
}

const CustomFlex = styled(Flex)`
  .lazy-load-image-background {
    width: 100%;
  }
  p,
  strong,
  span {
    color: rgb(34, 34, 34) !important;
    line-height: 20px !important;
    font-size: 16px !important;
    font-weight: 400 !important;
  }

  @media screen and (max-width: 690px) {
    flex-direction: column;
    padding: 4.1rem;
    margin-top: 1.2rem;
    P {
      font-size: 13px;
    }
  }
`;

const Description = styled('div')`
  display: inline-flex;
  padding-right: 1rem;
  word-break: break-word;
  flex-direction: column;
  height: 500px;
  overflow-y: hidden;
`;

const AboutUsImage = styled(LazyImageComponent)`
  max-height: 600px;
`;

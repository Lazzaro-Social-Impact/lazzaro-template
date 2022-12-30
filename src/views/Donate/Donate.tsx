import { useTranslation } from 'react-i18next';
import { Footer, DonateForm, Navbar } from '../../components';
import { Flex, SectionTitle } from '../../components/common';

function Donate() {
  const { t } = useTranslation();
  return (
    <>
      <Navbar />
      <Flex direction='column' textAlign='left'>
        <SectionTitle fontSize={3}>{t('make a donation')}</SectionTitle>
        <DonateForm />
      </Flex>
      <Footer />
    </>
  );
}

export default Donate;

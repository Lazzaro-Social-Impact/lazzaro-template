import { useTranslation } from 'react-i18next';
import { DonateForm } from '../../../components';
import { Tabs } from '../../../components/common';
import Description from './Description';
import LatestDonations from './LatestDonations';

interface IProps {
  projectDetails: {
    id: string;
    description: string;
  };
}

function ProjectTabs({ projectDetails }: IProps) {
  const { id = '', description = '' } = projectDetails;
  const { t } = useTranslation();

  return (
    <Tabs defaultActiveKey='1'>
      <Tabs.TabPane tab={t('details')} key='1'>
        <Description description={description} />
      </Tabs.TabPane>

      <Tabs.TabPane tab={t('Donate')} key='2'>
        <DonateForm modal />
      </Tabs.TabPane>

      <Tabs.TabPane tab={t('case_single.historical')} key='3'>
        <LatestDonations title={t('case_single.historical')} projectId={id} />
      </Tabs.TabPane>
    </Tabs>
  );
}

export default ProjectTabs;

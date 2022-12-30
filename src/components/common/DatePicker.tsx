import styled from 'styled-components';
import ReactDatePicker from 'react-datepicker';
import { Control, Controller } from 'react-hook-form';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  control: Control<any>;
};
const DatePicker: FC<Props> = ({ control }) => {
  const { t } = useTranslation();

  return (
    <Controller
      control={control}
      name='birthDate'
      render={({ field }) => (
        <CustomDatePicker
          name='birthDate'
          placeholderText={t('placeholders.dob')}
          selected={field.value}
          onChange={(date) => field.onChange(date)}
          dateFormat='dd/MM/yyyy'
          autoComplete='off'
          dropdownMode='select'
          showYearDropdown
          showMonthDropdown
        />
      )}
    />
  );
};

export default DatePicker;

const CustomDatePicker = styled(ReactDatePicker)`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  align-self: flex-start;
  box-shadow: ${({ theme }) => theme.primary};
  box-sizing: border-box !important;
  font-family: inherit;
  overflow: visible;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  min-width: 0;
  padding: 9.5px 11px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 1rem;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  -webkit-appearance: none;
  touch-action: manipulation;
  text-overflow: ellipsis;
  width: 100%;
  margin-top: 1rem;
  padding: 0.7rem;

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.primary} 0 0 0 2px;
  }
`;

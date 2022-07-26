/* eslint-disable max-len */
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import styled from 'styled-components'
import { useTheme } from '../../app/context/theme-context'
import { Carousel, Image } from '../../components/common'

function ProjectImage() {
  const color = useTheme()
  return (
    <Section>
      <Carousel arrows nextArrow={<ArrowRightOutlined />} prevArrow={<ArrowLeftOutlined />} autoplay autoplaySpeed={5000}>
        {[1, 2, 3, 4, 5].map((item) => (
          <ImageWrapper key={item}>
            <Image
              src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="project"
            />
          </ImageWrapper>
        ))}
      </Carousel>

      <Triangle color={color} />
    </Section>
  )
}

export default ProjectImage

const Section = styled.section`
  position: relative;
`

const ImageWrapper = styled.div`
  width: 100%;
  max-height: 40rem;
`
const Triangle = styled.div<{ color: TColor }>`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 99%);
  border: 2.2rem solid transparent;
  border-top: 2.2rem solid ${({ color }) => color};
`

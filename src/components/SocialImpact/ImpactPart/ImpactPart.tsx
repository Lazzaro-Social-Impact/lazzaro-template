import { type ReactElement } from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'
import { Flex, Text } from '../../common'

interface ImpactPartProps {
  amount: string | number;
  name: string;
}

function ImpactPart({ amount, name }: ImpactPartProps): ReactElement {
  return (
    <ImpactSection>
      <Text color="#fff" lineHeight={0} fontSize={4.8} weight="bolder">
        +<CountUp
          end={+amount}
          duration={3.2}
          separator=","
          enableScrollSpy
          start={0}
        />
      </Text>
      <Text color="#fff" fontSize={2} weight="200">
        {name}
      </Text>
    </ImpactSection>
  )
}

const ImpactSection = styled(Flex)`


// Carlota screen size ;-;

  @media (min-width: 900px) and (max-width: 1220px) {
    p:first-child {
      font-size: 2.9rem;
    }

    p:last-child {
      font-size: 1.1rem;
    }
  }

  @media (max-width: 900px) {
    p:first-child {
      font-size: 2.5rem;
    }

    p:last-child {
      font-size: 1rem;
    }
  }

    @media (min-width: 1220px) {
    p:first-child {
      font-size: 4rem;
    }

    p:last-child {
      font-size: 2rem;
    }
  }
  @media (min-width: 500px) and (max-width: 550px) {
    p:first-child {
      font-size: 2rem;
    }

    p:last-child {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 500px) {
    width: 40%;
  }
`

export default ImpactPart

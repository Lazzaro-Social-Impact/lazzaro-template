import { type ReactElement } from 'react'
import styled from 'styled-components'
import { Flex, Text } from '../../common'

interface ImpactPartProps {
  amount: string;
  name: string;
}

function ImpactPart({ amount, name }: ImpactPartProps): ReactElement {
  return (
    <ImpactSection>
      <Text color="#fff" lineHeight={0} fontSize={4.8} weight="bolder">
        +{amount}
      </Text>
      <Text color="#fff" fontSize={2} weight="200">
        {name}
      </Text>
    </ImpactSection>
  )
}

const ImpactSection = styled(Flex)`


  @media (min-width: 768px) and (max-width: 1220px) {
    p:first-child {
      font-size: 3rem;
    }

    p:last-child {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 768px) {
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

  @media (max-width: 500px) {
    width: 40%;
  }
`

export default ImpactPart

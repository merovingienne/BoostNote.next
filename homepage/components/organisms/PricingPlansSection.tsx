import React from 'react'
import Box from '../atoms/Box'
import FlexBox from '../atoms/FlexBox'
import Text from '../atoms/Text'
import { useTranslation } from 'react-i18next'
import styled from '../../lib/styled'

const TableContainer = styled.div`
  overflow: auto;
`
const PriceTable = styled.table`
  max-width: 100%;
  tr:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.white};
  }

  th,
  td {
    padding: ${({ theme }) => theme.space[3]}px;
    font-weight: 400;
  }

  thead th + th,
  tbody td {
    text-align: center;
  }

  thead th {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray};
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
    text-transform: uppercase;
  }
`

const PricingPlansSection = () => {
  const { t } = useTranslation()
  return (
    <section>
      <Box py={4} bg='#f0f0f0'>
        <Text as='h2' fontSize={4} my={5} textAlign='center'>
          🏁 Pricing Plans
        </Text>
        <FlexBox justifyContent='center' mx={2}>
          <TableContainer>
            <PriceTable>
              <thead>
                <tr>
                  <th>{t('pricing.feature')}</th>
                  <th>{t('pricing.basic')}</th>
                  <th>{t('pricing.premium')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{t('pricing.webApp')}</th>
                  <td>〇</td>
                  <td>〇</td>
                </tr>
                <tr>
                  <th>{t('pricing.desktopApp')} (Mac/Windows/Linux)</th>
                  <td>〇</td>
                  <td>〇</td>
                </tr>
                <tr>
                  <th>{t('pricing.mobileApp')} (iOS/Android)</th>
                  <td>〇</td>
                  <td>〇</td>
                </tr>
                <tr>
                  <th>{t('pricing.sync')}</th>
                  <td>〇</td>
                  <td>〇</td>
                </tr>
                <tr>
                  <th>File System Based Storage (Coming Soon)</th>
                  <td>〇</td>
                  <td>〇</td>
                </tr>
                <tr>
                  <th>{t('pricing.localStorageSize')}</th>
                  <td>{t('pricing.unlimited')}</td>
                  <td>{t('pricing.unlimited')}</td>
                </tr>
                <tr>
                  <th>{t('pricing.cloudStorageSize')}</th>
                  <td>100MB</td>
                  <td>2GB *</td>
                </tr>
                <tr>
                  <th>{t('pricing.price')}</th>
                  <td>Free</td>
                  <td>$3/Month *</td>
                </tr>
              </tbody>
            </PriceTable>
          </TableContainer>
        </FlexBox>
        <Text as='p' textAlign='center' fontStyle='italic' mb='5'>
          * {t('pricing.furtherPlan')}
        </Text>
      </Box>
    </section>
  )
}

export default PricingPlansSection
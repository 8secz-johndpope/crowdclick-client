// theirs
import React from 'react'
// components
import LoadingIcon from '../../../../shared/components/loadingIcons/LoadingIcon'
// styles
import { StyledGeneralHeadingTwo } from '../../../../shared/styles/StyledGeneralHeadings'
// assets
import { ReactComponent as SvgSuccess } from '../../../../assets/SVG/Success.svg'
import { kittenWarning } from '../../../../assets'

export const Temporary_CampaignOutcome = ({ step, respStatus }) => {
  if (step !== 6) {
    return null
  } else {
    if (!respStatus) {
      return <LoadingIcon />
    } else {
      if (respStatus === 201) {
        return (
          <>
            <div>
              <StyledGeneralHeadingTwo headingFontSize='24px'>
                Campaign Successfully Created!
              </StyledGeneralHeadingTwo>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SvgSuccess style={{ width: '80px' }} />
            </div>
          </>
        )
      } else if (respStatus === 200) {
        return (
          <>
            <div>
              <StyledGeneralHeadingTwo headingFontSize='24px'>
                Campaign Successfully Edited!
              </StyledGeneralHeadingTwo>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <SvgSuccess style={{ width: '80px' }} />
            </div>
          </>
        )
      } else {
        return (
          <>
            <div>
              <StyledGeneralHeadingTwo headingFontSize='24px'>
                Campaign not successfully completed
              </StyledGeneralHeadingTwo>
              <p>Go back and review the submitted campaign for errors</p>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img alt='campign-unsuccessful-icon' src={kittenWarning} />
            </div>
          </>
        )
      }
    }
  }
}

import React from 'react'
import {useHistory} from 'react-router-dom'
import { StyledPublisherCampaignTaskSummaryLayout as StyledUserTaskSummaryLayout } from  '../../publisher-dashboard__new-task/styles/CampaignStyles'
import  StyledGeneralButton  from '../../../shared/styles/StyledGeneralButton'
import { USER_TASK_ROUTE_WITH_PARAM } from '../../../config/routes-config'

export const TasksConsoleList = ({ id, title, description, og_image, task_owner_address }) => {
  const history = useHistory()

  const isPlaceholderNeeded = RegExp("foo", "g").test(og_image) || RegExp("placeholder", "g").test(og_image)



  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: "20px" }}>
      <StyledUserTaskSummaryLayout og_background={!isPlaceholderNeeded ? og_image : ""}>
        <div className='campaignAvatar' />
        {/* <div>
          <img src={og_image} />
        </div> */}
        <div style={{ marginLeft: '34px' }}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div style={{ display: 'flex', width: '60%' }}>
            <StyledGeneralButton
            buttonColor={'blue'}
            buttonMargin={'0px 20px 20px 0px'}
            buttonTextColor={'#FFFFFF'}
            buttonWidth={200}
            onClick={() => history.push({pathname: `${USER_TASK_ROUTE_WITH_PARAM}${id}`, state: {task_owner_address}})}
          >
            Start Task
          </StyledGeneralButton>
            {/* {useRedirectWithProps(`/task/${id}`, 'blue', 'Start Task')} */}
          </div>
        </div>
      </StyledUserTaskSummaryLayout>
    </div>
  )
}

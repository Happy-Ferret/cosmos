import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { misc, colors, spacing } from 'auth0-cosmos-tokens'

const sizeContent = {
  small: misc.avatar.small,
  medium: misc.avatar.medium,
  large: misc.avatar.large
}

const ContentAvatar = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

const StyledAvatar = styled.span`
  width: ${props => sizeContent[props.size]};
  height: ${props => sizeContent[props.size]};
  background-color: ${colors.base.grayLightest};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing.xsmall};

  img {
    min-width: 100%;
    min-height: 100%;
  }
`

const Avatar = props => {
  if (props.name) {
    return (
      <ContentAvatar>
        <StyledAvatar {...props}>
          <img src={props.image} alt="" />
        </StyledAvatar>
        <span>{props.name}</span>
      </ContentAvatar>
    )
  } else
    return (
      <StyledAvatar {...props}>
        <img src={props.image} alt="" />
      </StyledAvatar>
    )
}

Avatar.propTypes = {
  /** Avatar size */
  size: PropTypes.PropTypes.oneOf(['small', 'medium', 'large']),
  /** Avatar image */
  image: PropTypes.string,
  /** User's name */
  name: PropTypes.string
}

Avatar.defaultProps = {
  size: 'medium',
  image: null,
  name: null
}

export default Avatar

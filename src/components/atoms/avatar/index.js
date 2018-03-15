import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { misc } from 'auth0-cosmos-tokens'

const sizeContent = {
  small: misc.avatar.small,
  medium: misc.avatar.medium,
  large: misc.avatar.large
}

const StyledAvatar = styled.span`
  width: ${props => sizeContent[props.size]};
  height: ${props => sizeContent[props.size]};
  background-color: #f1f1f1;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar = props => <StyledAvatar {...props}>{props.source}</StyledAvatar>

Avatar.propTypes = {
  /** Avatar size */
  size: PropTypes.PropTypes.oneOf(['small', 'medium', 'large']),
  /** Avatar image */
  source: PropTypes.string
}

Avatar.defaultProps = {
  size: 'large',
  source: null
}

export default Avatar

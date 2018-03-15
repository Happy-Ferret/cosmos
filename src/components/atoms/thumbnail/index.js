import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { misc } from 'auth0-cosmos-tokens'

const sizeContent = {
  small: misc.avatar.small,
  medium: misc.avatar.medium,
  large: misc.avatar.large
}

const StyledThumbnail = styled.span`
  width: ${props => sizeContent[props.size]};
  height: ${props => sizeContent[props.size]};
  background-color: #f1f1f1;
  border-radius: 3px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Thumbnail = props => <StyledThumbnail {...props}>{props.source}</StyledThumbnail>

Thumbnail.propTypes = {
  /** Thumbnail size */
  size: PropTypes.PropTypes.oneOf(['small', 'medium', 'large']),
  /** Thumbnail image */
  source: PropTypes.string
}

Thumbnail.defaultProps = {
  size: 'large',
  source: null
}

export default Thumbnail

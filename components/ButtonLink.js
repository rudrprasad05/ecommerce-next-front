import Link from 'next/link'
import React from 'react'

import { primaryButtonStyling } from './PrimaryButton'

const ButtonLink = ({children, link}) => {
  return (
      <Link className={primaryButtonStyling} href={link}>{...children}</Link>
  )
}

export default ButtonLink
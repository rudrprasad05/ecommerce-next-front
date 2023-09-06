import Link from 'next/link'
import React from 'react'

import { primaryButtonStyling } from './PrimaryButton'

const ButtonLink = ({children, link, addClass}) => {
  return (
      <Link href={link} className={addClass}>{children}</Link>
  )
}

export default ButtonLink
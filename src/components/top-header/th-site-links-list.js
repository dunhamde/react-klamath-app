/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events */

import React from 'react'

export const TopHeaderLinksList = () => {
  return (
    <ul>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/tribal-government/tribal-council/"
        >
          Klamath Tribal Council
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/history/"
        >
          History
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/administration/natural-resources/"
        >
          Hunting and Camping
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://klamathtribes.org/contact-us/"
        >
          Contact Us
        </a>
      </li>
    </ul>
  )
}

export default TopHeaderLinksList

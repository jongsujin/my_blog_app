'use client'

import { PROFILE_URL } from '@/config/constants'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export default function Profile() {
  const onClickOtherPage = (url: string) => {
    window.open(url, '_blank')
  }
  return (
    <section className="flex items-center space-x-2">
      <FaGithub
        onClick={() => onClickOtherPage(PROFILE_URL.github)}
        className="h-8 w-8 cursor-pointer text-textColor"
      />
      <FaLinkedin
        onClick={() => onClickOtherPage(PROFILE_URL.linkedin)}
        className="h-8 w-8 cursor-pointer text-textColor"
      />
      <a href={`mailto:${PROFILE_URL.email}`}>
        <IoMdMail className="h-8 w-8 cursor-pointer text-textColor" />
      </a>
    </section>
  )
}

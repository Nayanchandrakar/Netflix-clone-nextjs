import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({}) => {
  return (
    <Link href="/">
        <Image
            src="/logo/logo.svg"
            alt='logo-image'
            width={140}
            height={140}
            className='filter_red'
        />
    </Link>
  )
}

export default Logo
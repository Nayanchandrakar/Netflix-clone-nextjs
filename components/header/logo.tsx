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
            sizes='100vw'
            priority
            className='filter_red w-20 h-20  md:w-36 md:h-36'
        />
    </Link>
  )
}

export default Logo
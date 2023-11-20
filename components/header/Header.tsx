import { FC } from 'react'


import Container from '@/components/shared/contianer'
import Logo from '@/components/header/logo'
import Navigation from '@/components/header/Navigation'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
  return (
    <header className='fixed inset-0 w-full h-[78px]'>
        <Container className=' w-full h-full flex justify-between items-center flex-row'>
            <Logo/>
            <Navigation />
        </Container>
    </header>
  )
}

export default Header
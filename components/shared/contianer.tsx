import { cn } from '@/lib/utils'
import React, { FC } from 'react'

interface ContainerProps extends React.AllHTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

const Container: FC<ContainerProps> = ({ className, children, ...props }) => {

    return <div className={cn('mx-auto px-6 relative max-w-7xl sm:px-16', className)} {...props}>
        {children}
    </div>
}

export default Container
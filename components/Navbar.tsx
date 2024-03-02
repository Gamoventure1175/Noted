import React from "react"
import {
    NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

import Link from "next/link"

import Image from "next/image"

import logo from '@/public/images/logo.png'

const Navbar: React.FC = () => {
    return (
        <header>
            <div>
                <Link href={'/'}>
                    <Image alt={'logo'} src={logo} height={50} width={50}/>
                    <span>
                        Notes
                    </span>
                </Link>
            </div>

            
        </header>
    )
}

export default Navbar
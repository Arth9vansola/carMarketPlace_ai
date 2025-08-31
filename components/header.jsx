import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, SignUpButton, SignIn } from "@clerk/nextjs";
import Link from 'next/link';
import { checkUser } from "@/lib/checkUser";
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react';


const header = async({isAdminPage = false}) => {
const user = await checkUser();  
const isAdmin = user?.role === "ADMIN";
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <nav className="mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={isAdminPage ? '/admin' : '/'} className='flex'> 
        {/* <Image src={'/motionGo.png'}
         alt='motionGo logo'
         width={200}
         height={60}
         priority
         className="h-12 w-auto object-contain"
        /> */}
        <p className='text-2xl md:text-3xl font-bold text-gray-900  transition-colors duration-200'>motionGo</p>
        {isAdminPage && (
            <span className="text-xs font-extralight"></span>
          )}
        </Link>
        <div className='flex items-center space-x-4'>
          {isAdminPage ? 
          (<Link href={'/'}>
            <Button variant='outline' className='flex items-center gap-2'>
              <ArrowLeft size={18} />
              <span>Back to App</span>
            </Button>
          </Link>) :
          (<SignedIn>
            <Link href={'/saved-cars'}>
            <Button>
              <Heart size={18} />
              <span className='hidden md:inline'>Saved Cars</span>
              </Button>
            </Link>
             {!isAdmin ? 
             (<Link href={'/reservations'}>
              <Button variant='outline'>
                <CarFront size={18} />
                <span className='hidden md:inline'>My Reservations</span>
                </Button>
              </Link>) 
             : (
              <Link href={'/admin'}>
              <Button variant='outline'>
                <Layout size={18} />
                <span className='hidden md:inline'>Admin Portal</span>
                </Button>
              </Link>)}
          </SignedIn>
        )}
          <SignedOut>
            <SignInButton forceRedirectUrl='/'>
              <Button variant='outline'>Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
            appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                  }}}
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default header;

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-5 md:p-24 md:gap-12">
      <div className='text-center'>
        <h2 className='funny-text text-white text-[20px] md:text-[54px] font-medium my-2'>Login to Your Account</h2>
        <Link className='text-white funny-text' href='/summarize'>Login to Your Account</Link>
        <p className='funny-text text-gray-500 md:text-[22px] hidden md:block'>
          Vorem ipsum dolor sit amet, consectetur adipiscing elit. Vorem ipsum dolor <br />
          sit amet, consectetur adipiscing elit.  
        </p>
      </div>


      <div className="flex md:flex-row md:space-x-6">
        <div>
          <form action="">
            <div className='my-3'>
              <input type="email" className='input' placeholder='Email Address' />
            </div>
            
            <div className='my-3'>
              <input type="password" className='input' placeholder='******' />
            </div>
            
            <div className='my-3'>
              <button className='flex justify-between font-semibold btn'>
                Login to continue
                <ArrowRightIcon className='w-6 h-6' />
              </button>
            </div>
            <div className='my-1 text-[#898889]'>
              <small className='text-xs'>Don&apos;t have an account with us? <a className='font-medium text-white'>Register now</a></small>
            </div>
          </form>
        </div>

        <div className='flex-col items-center justify-center hidden md:flex'>
          <div>
            <Image width={20} height={20}  src="/assets/icons/zig.svg" alt="zig" />
          </div>
        </div>

        <div className='flex-1'>
          <div className="my-3">
            <button className='flex justify-between text-sm btn' style={{ minWidth: '100%' }}>
              {/* <FontAwesomeIcon
                icon={faLongArrowRight}
                className='text-xs'
              /> */}
              <ArrowRightIcon className='w-6 h-6' />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

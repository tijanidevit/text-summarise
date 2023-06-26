import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const [text, setText] = useState("");
  const [summarizedtext, setsummarizedtext] = useState("");
  const [loading, setLoading] = useState(false);

  const configuration = new Configuration({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

  const HandleSubmit = (e:any) => {
    setLoading(true);
    e.preventDefault();
    openai
      .createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(text),
        temperature: 0.6,
        max_tokens: 100,
      })
      .then((res) => {
        if (res.status === 200) {
          setLoading(false);
          console.log('res', res)
          setsummarizedtext(res.data.choices[0].text);
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  function generatePrompt(text) {
    return `Summarize this ${text}. and break them into seperate lines`;
  }
  return (
    <main className="min-h-screen gap-5 md:p-24 md:gap-12">
      <div className='text-center'>
        <h2 className='funny-text text-white text-[20px] md:text-[54px] font-medium my-2'>Summarize Text</h2>
        <p className='funny-text text-gray-500 md:text-[22px] hidden md:block'>
          Enter full text to summarise.  
        </p>
      </div>


      <div className="">
        <div>
          <form action="">
            <div className='my-3'>
              <textarea rows={9} className='input'></textarea>
            </div>
            
            
            <div className='w-56 my-3'>
              <button onClick={HandleSubmit} className='flex justify-between font-semibold btn'>
                Login to continue
                <ArrowRightIcon className='w-6 h-6' />
              </button>
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

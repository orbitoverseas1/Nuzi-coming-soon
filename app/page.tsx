import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full text-center flex flex-col items-center justify-center -mt-10 sm:-mt-14 md:-mt-16 lg:-mt-20 xl:-mt-24">
        <div className="w-full flex items-center justify-center mt-4 mb-6">
          <Image 
            src="/NUZI-LOGO-V4.png" 
            alt="Nuzi logo"
            width={320}
            height={120}
            priority
            className="h-auto w-[40vw] sm:w-[30vw] md:w-[24vw] lg:w-[18vw] xl:w-56"
          />
        </div>
        {/* Main heading with background text */}
        <div className="relative mb-20 sm:mb-24 md:mb-32 w-full flex items-center justify-center">
          {/* Large background "COMING SOON" */}
          <h1 
            className="font-playfair text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] xl:text-[7.5rem] font-normal leading-none tracking-[0.02em] text-[#d4c8be] opacity-90 animate-fade-in whitespace-nowrap"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            COMING SOON
          </h1>
          
          {/* Overlaid script "Coming Soon" */}
          <div 
            className="absolute inset-0 flex items-start justify-center pt-[8%] sm:pt-[6%] md:pt-[6%] 2xl:pt-[5%] animate-fade-in-up animation-delay-400"
          >
            <h2 
              className="font-great-vibes text-[7vw] sm:text-[6.5vw] md:text-[5.5vw] lg:text-[5vw] xl:text-[4.5rem] font-normal text-[#452e26] ml-[5%]"
              style={{ fontFamily: 'var(--font-great-vibes)' }}
            >
              Coming Soon
            </h2>
          </div>
        </div>

        {/* Bottom text */}
        <p 
          className="font-playfair text-[3.5vw] sm:text-[2.5vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.75rem] font-normal tracking-[0.15em] text-[#523633] animate-fade-in-up animation-delay-600 px-4"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          <span className="whitespace-nowrap">GIRLS, WE HAVE GOT SOMETHING FOR</span>
          <span className="block">YOU!</span>
        </p>
      </div>
    </main>
  );
}

import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className='m-3 font-bold text-3xl'>PREPTEST FRONTEND TECHNICAL TEST</h1>

      {/* Use this figma link */}
      <div className='flex flex-row items-center justify-center'>
        <img alt='figma-icon' src='https://www.vectorlogo.zone/logos/figma/figma-icon.svg' width='30' height='30' />
        <a
          className='m-3 font-bold text-3xl text-blue-500'
          href='https://www.figma.com/file/dwq7prfTwjVvfSuhQOAYI9/PREPTEST-TECHNICAL-TEST?type=design&node-id=314-342&mode=design&t=skXIqovEz4h2TaZs-0'
          target='_blank'
          rel='noreferrer'
        >
          Figma Link
        </a>
      </div>

      {/* PLEASE README ALERT TEXT */}

      <a
        href='https://github.com/bfz-prep-test-com/preptest-frontend-technical-test/blob/main/readme.md'
        target='_blank'
        rel='noreferrer'
      >
        <div className='flex flex-col items-center justify-center'>
          <h2 className='font-bold text-primary-500 text-3xl'>PLEASE READ ME FIRST</h2>
        </div>
      </a>

      {/* EMBED FIGMA */}
      <iframe
        title='figma-embed'
        className='m-3'
        width='80%'
        height='600'
        src='https://www.figma.com/embed?embed_host=astra&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fdwq7prfTwjVvfSuhQOAYI9%2FPREPTEST-TECHNICAL-TEST%3Fnode-id%3D314%253A342'
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Home

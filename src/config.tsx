import Head from 'next/head'

interface HeaderProps {
  title?: string;
}

const titleDefault = 'next typed react'
const description = 'Project built to combine typescript Next JS with React-Three-Fiber'
const author = 'Victor Shahbazian'

const Header: React.FC<HeaderProps> = ({ title = titleDefault }) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='language' content='english' />
      <meta httpEquiv='content-type' content='text/html' />
      <meta name='author' content={author} />
      <meta name='designer' content={author} />
      <meta name='publisher' content={author} />

      <title>{title}</title>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta
        name='keywords'
        content='Software Engineer,Product Manager,Project Manager,Data Scientist,Computer Scientist'
      />
      <meta name='robots' content='index,follow' />
      <meta name='distribution' content='web' />

      <meta name='viewport' content='width=device-width, minimum-scale=1, initial-scale=1.0' />
      <meta name='theme-color' content='#000' />
      <link rel='shortcut icon' href='/icons/favicon.ico' />
    </Head>
  )
}

export default Header

import NextHead from 'next/head';

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet='UTF-8' />
    <title>{title || ''}</title>
    <meta name='description' content={description || ''} />
    <meta name='viewport' content='width=device-width, initial-scale=1' />

    <link
      rel='stylesheet'
      href='https://fonts.googleapis.com/css2?family=Zilla+Slab:wght@300;600&display=swap'
    />
  </NextHead>
);

export default Head;

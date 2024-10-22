import ReactMarkdown from 'react-markdown';
import Inspect from '../../components/common/tempInspect';

const markdown = `
Go *beyond the docs*.

Production-level code & concepts for newbs & pros.

Join me for an exploration of React in an visible style, to help you with the basics and advanced concepts of React. Starting with the basics of the Component structure and Parent & Child relationships, to more advanced concepts like Hooks, Custom Hooks, the Store, and working with Redux & Thunk.
`;

const code = `  return (
    <section className='p-10 flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
      <h1 className='text-5xl py-7'>Visible React</h1>
      <div className='prose lg:prose-xl text-left leading-8 max-w-lg'>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
  `;

export default function Hero() {
  return (
    <Inspect name='Hero' code={code}>
      <section className='p-10 flex flex-col items-center justify-center h-screen bg-gray-800 text-white'>
        <h1 className='text-5xl py-7'>Visible React</h1>
        <div className='prose lg:prose-xl text-left leading-8 max-w-lg'>
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </section>
    </Inspect>
  );
}

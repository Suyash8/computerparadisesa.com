import { ChevronDownIcon } from '@heroicons/react/outline';
import { Button } from '@chakra-ui/react';

export default function Home(props) {
  return (
    <div className={`${props.pages.name === 'Home' ? '' : 'hidden'}`}>
      <Hero handleClick={props.setHome} />
      <div className="min-h-screen">Home</div>
      <div className="min-h-screen">Home</div>
    </div>
  );
}

function Hero(props) {
  return (
    <>
      <div className="absolute -z h-20 bg-gray-900 w-full -top-20 right-0" />
      <div className="min-h -z relative p-6 bg-gray-900">
        <div className="grid mb-6 w-full md:grid-cols-2">
          <div>
            <h2 className="motto flex flex-col h-full justify-center b-8 text-6xl">
              <div className="text-red">we just not sell,</div>
              <div className="text-blue">we develop relations...</div>
            </h2>
            <div className="buttons md:flex">
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => props.handleClick('Contact')}
              >
                Contact us
              </Button>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => props.handleClick('Products')}
              >
                Catalogue
              </Button>
              {/* <button
                className="w-full rounded-lg my-2 block text-sm px-2 py-4 bg-black"
                onClick={() => props.handleClick('Contact')}
              >
                Contact us
              </button>
              <button
                className="w-full rounded-lg my-2 block text-sm px-2 py-4 bg-white"
                onClick={() => props.handleClick('Products')}
              >
                Catalogue
              </button> */}
            </div>
          </div>
          <img
            className="min-w"
            alt="hero_image"
            src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1cc3ed7cfea351718e7bec74/xcc-min.png"
          />
        </div>
        <div className="my-1/2 absolute bottom-2 right-0 w-full flex items-center justify-center">
          <ChevronDownIcon className="w-8 flex items-center justify-center" />
        </div>
      </div>
    </>
  );
}

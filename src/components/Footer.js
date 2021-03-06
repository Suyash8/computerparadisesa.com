export default function Footer({ pages, setHome }) {
  return (
    <footer className="bg-gray-900 pt-2 w-full min-h-6xl absolute right-0 left-0 bottom-0">
      <div className="p-4 m-3 md:p-2 md:m2">
        <div className="flex flex-wrap justify-center text-center text-gray-500 text-base">
          {pages.map((page) => (
            <LinkFooter
              key={page.name}
              name={page.name}
              handleClick={setHome}
            />
          ))}
        </div>
        <div className="p-3 text-center text-gray-500 font-medium">
          <a href="/">Computer Paradise &reg; 2005 </a>
        </div>
      </div>
    </footer>
  );
}

function LinkFooter(props) {
  return (
    <button onClick={() => props.handleClick(props.name)}>
      {props.name}&nbsp;
      {props.name !== "Contact" && "/"}
      &nbsp;
    </button>
  );
}

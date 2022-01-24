export default function Whereabouts({ props }) {
  let data = [
    {
      name: "Where to find us",
      type: "add",
      data: [
        "Beside Hotel Vinayak Building, 1st Floor",
        "Hill Cart Road, Siliguri - 734 001",
        "West Bengal, India"
      ]
    },
    {
      name: "Email us at",
      type: "email",
      data: [
        "support@computerparadisesa.com",
        "somansharma@computerparadisesa.com",
        "akhilsharma@computerparadisesa.com"
      ]
    },
    {
      name: "Call us at",
      type: "phone",
      data: ["+91 89428 60901", "+91 97331 44909"]
    }
  ];

  return (
    <div className="py-8 leading-7 font-medium text-base px-4 text-white">
      <h3 className="uppercase font-medium text-sm mb-8 tracking-widest text-white">
        Contact info
      </h3>
      <div className="divide-y divide-gray-300">
        {data.map((data) => (
          <Section props={data} />
        ))}
      </div>
    </div>
  );
}

function Email(props) {
  return (
    <>
      <a href={`mailto:${props.data}`}>{props.data}</a>
      <br />
    </>
  );
}

function Data(props) {
  return (
    <>
      {props.data}
      <br />
    </>
  );
}

function Heading(props) {
  return (
    <h4 className="text-green-300 mb-4 mt-5 font-medium ">{props.name}</h4>
  );
}

function Section({ props }) {
  return (
    <div>
      <Heading name={props.name} />
      <p className="mb-5">
        {props.type === "email"
          ? props.data.map((data) => <Email data={data} />)
          : props.data.map((data) => <Data data={data} />)}
      </p>
    </div>
  );
}

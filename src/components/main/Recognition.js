export default function Recognition(props) {
  return (
    <div className={`${props.pages.name === "Recognition" ? "" : "hidden"}`}>
      This is the Recognition page
    </div>
  );
}

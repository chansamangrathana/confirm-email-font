type PropsParams = {
  params: {
    id: string;
  };
  searchParams: any;
};
export default function Detail(props: PropsParams) {
  console.log("hi",props);
  return;
  <div className="h-screen  grid place-content-center text-6xl">{props.params.id}</div>;
}

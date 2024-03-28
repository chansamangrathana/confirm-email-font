import {ConfirmIcon} from "@/components/icon/FontAwsome"
type Props={
    params:{
        key:string;
    };
    searchParams:any;
};
import style from "./style.module.css"
import Button from "./component/Button";
export default function Confirm(props:Props) {
  return (
    <main className={style.container}>
    {/* Confirm Email Card */}
    <section className="flex flex-col items-center">
       
        <ConfirmIcon color="#080" classname="h-44 w-44 mb-8" />
        
        <h1 className="text-6xl my-4">Email has been Confirmed!</h1>
        
        <p className="text-3xl">
            Your email comfirmed! you can go to login page by press below button!
        </p>
        <p className="text-3xl my-4">
        សួស្តី! តើខ្ញុំអាចជួយអ្នកជំនាញអ្វីបានទេ?        </p>
        <Button title="Login" classname="my-8" />
    </section>
</main>

  );
}

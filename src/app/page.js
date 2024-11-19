import Image from "next/image";
import Link from "next/link";
import styles from './globals.css';


export default function Home() {
  return ( 
    <div className='h-[740px] w-full justify-center items-center self-center bg-slate-300 ' >
      <div className=" h-[740px] flex flex-col items-center justify-center justify-items-center " >
      <h1 className={`font-bold text-5xl mb-4 `} >User Management App</h1>
     

     <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-4
     " href={'/user-management  '} > View users  </Link>

</div>
    </div>
  );
}

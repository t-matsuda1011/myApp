import UnderConstruction from "@/components/under-constraction";
import PageMessage from "@/components/page-message";

export default function Page() {
  return (
    <div className='mt-10'>
      <PageMessage text="Home"/>
      <UnderConstruction />
    </div>
  );
}
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
  return (
    <Layout>
      <div className="grid justify-center">
        <div className="text-3xl font-bold justify-center">Agree</div>
        <Link href="/submit/Upload">
          <Button>Next</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default Index;

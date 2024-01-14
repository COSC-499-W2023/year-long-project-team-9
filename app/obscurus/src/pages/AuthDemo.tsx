import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function AuthDemo() {
  const router = useRouter();
  const { name } = router.query;
  console.log(router.query.code);
  return (
    <Layout>
      <div className="grid justify-center items-center pt-12">
        <p className="uppercase font-bold text-2xl pb-8" data-testid="welcome">
          Welcome!
        </p>
        <a
          data-testid="link"
          href="https://obscurususerpool.auth.us-west-2.amazoncognito.com/login?response_type=code&client_id=45sq39c3d2srgg5cm5iclt82m6&redirect_uri=http://localhost:3000/AuthDemo"
        >
          <div>
            {true ? (
              <Button type="button" className="w-full">
                Sign Out
              </Button>
            ) : (
              <Button type="button" className="w-full">
                Sign In
              </Button>
            )}
          </div>
        </a>
      </div>
    </Layout>
  );
}

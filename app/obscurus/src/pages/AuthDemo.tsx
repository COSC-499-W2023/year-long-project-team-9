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
          href="https://obscuruslogin.auth.us-west-2.amazoncognito.com/login?client_id=1tuqvd1clipk95uncep6fcf3el&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FAuthDemo"
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

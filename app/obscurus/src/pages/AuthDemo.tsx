import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";

const AuthDemo = () => {
  {
    /*I know this sucks, but it will work for now*/
  }

  const searchParams = useSearchParams();
  let codePresent = false;
  try {
    const code = searchParams.get("code");
    if (code != null) {
      codePresent = true;
    } else {
      codePresent = false;
    }
  } catch (e) {}

  return (
    <Layout>
      <div className="grid justify-center items-center pt-12">
        <p className="uppercase font-bold text-2xl pb-8" data-testid="welcome">
          Welcome!
        </p>
        <a
          data-testid="link"
          href="https://obscuruslogin.auth.us-west-2.amazoncognito.com/login?client_id=4fh382tdlodqdcoi0c710fhv7k&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FAuthDemo"
        >
          <div>
            {codePresent ? (
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
};

export default AuthDemo;

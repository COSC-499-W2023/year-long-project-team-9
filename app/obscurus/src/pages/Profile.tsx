import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const code = router.query.code;
  return <h1>{code ? code : "Hello world"}</h1>;
}

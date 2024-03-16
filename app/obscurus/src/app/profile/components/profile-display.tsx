export default function ProfileDisplay({ form }: { form: any }) {
  return (
    <>
      <div>{form.getValues("email")}</div>
      <div>{form.getValues("firstName")}</div>
      <div>{form.getValues("lastName")}</div>
    </>
  );
}

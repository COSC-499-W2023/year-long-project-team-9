import { FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ChangingPasswordInput({ form }: any) {
  return (
    <>
      <div>
        <FormLabel>Change Password</FormLabel>
        <Tabs defaultValue="keepPassword" className="w-full">
          <TabsList className="w-full">
            <TabsTrigger
              value="keepPassword"
              className="w-full"
              onClick={() => {
                form.setValue("changingPassword", false);
                form.resetField("password");
                form.resetField("confirmPassword");
              }}
            >
              Keep Password
            </TabsTrigger>
            <TabsTrigger
              value="changePassword"
              className="w-full"
              onClick={() => {
                form.setValue("changingPassword", true);
                form.resetField("password");
                form.resetField("confirmPassword");
              }}
            >
              Change Password
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {form.getFieldState("changingPassword").error && (
          <FormMessage>
            {form.getFieldState("changingPassword").error.message}
          </FormMessage>
        )}
      </div>
    </>
  );
}

import { useMutation } from "@tanstack/react-query";

import { ProfileType, signIn } from "@/lib/api/signIn";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  const mutation = useMutation<ProfileType, Error, string>(signIn);

  return (
    <Button
      onClick={() => {
        const authCode = "yourAuthCodeHere"; // obtain this dynamically
        mutation.mutate(authCode);
      }}
    >
      Sign In
    </Button>
  );
};

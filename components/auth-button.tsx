"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AuthResponse, ErrorType, ProfileType, signIn } from "@/lib/api";
import { Button } from "@/components/ui/button";

export const SignInButton = () => {
  const queryClient = useQueryClient();

  const signInMutation = useMutation({
    mutationFn: (authCode) => signIn(authCode),
    onMutate: async (authCode: string) => {
      await queryClient.cancelQueries({ queryKey: ["auth"] });

      const previousAuth = queryClient.getQueryData<AuthResponse>(["auth"]);
    },
    onError: (error: ErrorType) => {
      // enqueueSnackbar("Ops.. Error on sign in. Try again!", {
      //   variant: "error",
      // });
      console.error(error);
    },
    onSuccess: (data: ProfileType) => {
      // TODO: save the user in the state
      // navigate("/");
      console.log("success!");
      console.log({ data });
    },
  });

  return (
    <Button
      onClick={() => {
        const authCode = "yourAuthCodeHere"; // obtain this dynamically
        signInMutation(authCode);
      }}
    >
      Sign In
    </Button>
  );
};

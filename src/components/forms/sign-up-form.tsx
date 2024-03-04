"use client"
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SignUpFormType, signUpSchema } from "@/app/types/formTypes";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast } from "../ui/use-toast";
import { useState } from "react";


type SignUpFormProps = {
  onSuccess: () => void;
}

export function SignUpForm({onSuccess}: SignUpFormProps) {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);
  const form = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema)
  });



  const onSubmit = async (values: SignUpFormType) => {
    setLoading(true);
    const response = await fetch('api/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values)
    });

    const data = await response.json();

    if (data.errors) {
      const errors = data.errors;
      if (errors.email) {
        form.setError("email", {
          type: 'server',
          message: errors.email
        });
      }
      if (errors.username) {
        form.setError("username", {
          type: 'server',
          message: errors.username
        });

      }
    }

    if (response.ok) {
      onSuccess();
      toast(
        {
          title: "Your account was created", 
          description: "Now log into your new account" 
        }
      );
      setLoading(false);
      return;
    }

    if (!data.errors) {
      toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
    }
    setLoading(false);
  };

  return (
    <Form {...form}>
      <form method="post" onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col p-4">
        <h1 className="text-center font-bold text-3xl">Sign Up</h1>
        <FormField
            control={form.control}
            name="email" 
            defaultValue=""
            render={({field}) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                        <Input placeholder="*Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="username"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormControl>
                <Input placeholder="*Username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          defaultValue=""
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*Confirm password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex justify-center">
          <Button type="submit" className={`px-20 rounded ${loading ? "bg-muted-foreground" : ""}`} disabled={loading}>
            Create Account
          </Button>
        </div>
      </form>
    </Form>
  )
}
"use client";
import { FC } from "react";
import { z } from "zod";
import { useRouter } from "next/navigation";
import Image from "next/image";

import ModInput from "@/components/shared/mod-input";
import { signInFormSchmea } from "@/schema/zod-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Logo from "@/components/header/logo";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof signInFormSchmea>>({
    resolver: zodResolver(signInFormSchmea),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof signInFormSchmea>) => {
    try {
      if (values) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full h-full mt-[3rem]">
      <div className="relative inset-0 w-full h-full">
        <Image
          src="/auth/sign-in-hero.jpg"
          width={1000}
          height={1000}
          sizes="100vw"
          priority
          className="w-full h-[80vh] sm:h-full object-cover"
          alt="hero-image"
        />

        <div className="hero_gradient absolute inset-0" />
        <div className="bg-black/30 absolute inset-0" />
        <Logo className="absolute inset-0 left-10 z-40 " />

        <div className="w-full h-full flex items-center justify-center text-white absolute inset-0">
          <div className="w-[28rem] h-fit bg-black/70 p-12">
            <span className="text-2xl font-semibold">Sign In</span>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ModInput
                          {...field}
                          placeholder="Email or phone number"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ModInput {...field} placeholder="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="bg-red-600 hover:bg-red-600/80 w-full py-6"
                >
                  Sign In
                </Button>
              </form>
            </Form>

            <div className="space-y-2 mt-4">
              <div className="flex justify-between items-center">
                <Checkbox className="bg-gray-500 " />
                <Link href="/" className="text-gray-500 hover:underline">
                  Need help?
                </Link>
              </div>

              <p className="text-gray-500 ">
                New to Netflix?
                <Link href="/" className="text-white text-base hover:underline">
                  Sign up Now
                </Link>
              </p>

              <p className="text-xs text-gray-500">
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <span className="text-blue-500">Learn more.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;

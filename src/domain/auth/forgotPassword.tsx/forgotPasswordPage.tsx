"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const { systemTheme } = useTheme()
  const router = useRouter()
  return (
    <div className="flex h-screen w-full">
      <div className="bg-white hidden bg-[url(/images/fuso.png)] bg-center md:flex bg-cover flex-1 items-center justify-center">
      </div>

      <div className="mx-4 4flex flex-1 items-center justify-center">
        <Card className="w-full max-w-xl min-w-lg shadow-xl p-8">
          <CardContent>
            <div>
              <div className="flex grid-cols-2 gap-4 justify-start items-center">
                <div>
                  <Image
                    src={systemTheme === 'dark' ? '/images/icon-dark.png' : '/images/icon-light.png'}
                    alt="KTB Logo"
                    className="w-20"
                    width={80} // or any appropriate value
                    height={80} // or any appropriate value
                  />
                </div>
                <div >
                  <h2 className="text-xl font-bold">PT KRAMA YUDHA</h2>
                  <h2 className="text-xl font-bold">TIGA BERLIAN MOTORS</h2>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">Forgot Password</h2>
              <p className="text-gray-500">Don't worry! Enter your email below and we'll email you with instructions on how to reset your password.</p>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
                <Button className="w-full">Continue</Button>
                <Button variant={'ghost'} className="p-0" onClick={() => router.push('login')}>
                  <ArrowLeft />
                  Back
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

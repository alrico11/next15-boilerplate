"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useTheme()
  const router = useRouter()

  return (
    <div className="flex h-screen w-full">
      <div className="bg-white hidden bg-[url(/images/fuso.png)] bg-center md:flex bg-cover flex-1 items-center justify-center">
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Card className="mx-4 w-full max-w-xl min-w-lg shadow-xl p-8">
          <CardContent>
            <div>
              <div className="flex grid-cols-2 gap-4 justify-start items-center">
                <div>
                  <Image
                    src={theme === 'dark' ? '/images/icon-dark.png' : '/images/icon-light.png'}
                    alt="KTB Logo"
                    className="w-20"
                    width={80}
                    height={80}
                  />
                </div>
                <div >
                  <h2 className="text-xl font-bold">PT KRAMA YUDHA</h2>
                  <h2 className="text-xl font-bold">TIGA BERLIAN MOTORS</h2>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-semibold">KTB Fuso Web Survey</h2>
              <p className="text-gray-500">Sign in to your account</p>
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Your email" type="email" />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      placeholder="Your password"
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-2 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <Label onClick={() => router.push('forgot-password')} className="text-sm hover:underline">Forgot Password?</Label>
                </div>
                <Button className="w-full">Continue</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

/**
     * v0 by Vercel.
     * @see https://v0.dev/t/4ugVFCVBf8I
     * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
     */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function AuthForm() {

    <div className="mx-auto max-w-sm space-y-6">
        <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-gray-500 dark:text-gray-400">Enter your information to sign in</p>
        </div>
        <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="m@example.com" required />
        </div>
        <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
        </div>
        <Button className="w-full">Sign In</Button>
        <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <Label className="text-sm" htmlFor="remember-me">
                Remember me
            </Label>
        </div>
        <div className="grid gap-2">
            <Button className="w-full" variant="ghost">
                Forgot your password?
            </Button>
            <Button className="w-full" variant="ghost">
                Create an account
            </Button>
        </div>
    </div>

}
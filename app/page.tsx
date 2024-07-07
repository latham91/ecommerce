import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>

      <Button asChild>
        <RegisterLink>Sign up</RegisterLink>
      </Button>
    </div>
  );
}

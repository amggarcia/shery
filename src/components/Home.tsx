import { Card } from "~/components/interface/Card";
import SheryLogo from "~/components/logos/shery";
import { useAuth } from "~/utils/AuthContext";
import { Button } from "~/components/interface/Button";
export default function Home() {
  const { user, logOut } = useAuth();
  return (
    <Card title="testing">
      <div className="flex justify-center">
        <SheryLogo width="100" height="100"></SheryLogo>
      </div>
      <div className="text-8xl font-bold text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-red-500">
          Shery
        </span>
      </div>
      <div className="mt-8">
        {user && (
          <div className="grid gird-cols-2 gap-4">
            <Button href="/share/create">Create a shery</Button>
            <Button onClick={logOut}>Log out</Button>
          </div>
        )}
        {!user && <Button href="/auth/login">Log in</Button>}
      </div>
    </Card>
  );
}

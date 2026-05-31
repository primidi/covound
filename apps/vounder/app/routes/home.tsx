import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CoVound | Admin" },
    { name: "description", content: "Official Registry Management" },
  ];
}

export default function Home() {
  return <Welcome />;
}

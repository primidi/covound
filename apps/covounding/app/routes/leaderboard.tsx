import { Badge } from "@covound/ui/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@covound/ui/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@covound/ui/components/ui/table";
import { ArrowLeft, Medal, Star, Trophy } from "lucide-react";
import type { MetaFunction } from "react-router";
import { Link, useLoaderData } from "react-router";
import { getPrisma } from "~/db.server";

export const meta: MetaFunction = () => [{ title: "CoVound | Leaderboard" }];

export async function loader({ context }: { context: { cloudflare: { env: Record<string, string | undefined> } } }) {
  const prisma = getPrisma(context.cloudflare.env);
  const topHunters = await prisma.user.findMany({
    where: {
      OR: [{ role: "INVESTIGATOR" }, { reputationPoints: { gt: 0 } }],
    },
    orderBy: { reputationPoints: "desc" },
    take: 10,
  });

  return { topHunters };
}

export default function LeaderboardPage() {
  const { topHunters } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-semibold"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <header className="text-center space-y-4 mb-16">
          <Badge
            variant="secondary"
            className="bg-indigo-100 text-indigo-700 font-black uppercase tracking-widest px-4 py-1.5 rounded-full"
          >
            Hall of Fame
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Master Threat Hunters
          </h1>
          <p className="text-slate-500 text-lg font-medium">
            The clinical specialists sanitizing our digital ecosystem.
          </p>
        </header>

        <Card className="border-2 border-slate-200 shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardHeader className="p-10 border-b bg-slate-50/50">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <Trophy className="h-8 w-8 text-amber-500" />
              Global Rankings
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-slate-50/50 border-none">
                  <TableHead className="pl-10 h-16 font-bold text-slate-400 text-xs uppercase tracking-widest">
                    Rank
                  </TableHead>
                  <TableHead className="h-16 font-bold text-slate-400 text-xs uppercase tracking-widest">
                    Hunter
                  </TableHead>
                  <TableHead className="h-16 font-bold text-slate-400 text-xs uppercase tracking-widest">
                    Specialization
                  </TableHead>
                  <TableHead className="pr-10 h-16 text-right font-bold text-slate-400 text-xs uppercase tracking-widest">
                    Reputation
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topHunters.map((hunter, index) => (
                  <TableRow
                    key={hunter.id}
                    className="hover:bg-slate-50 transition-colors border-slate-100"
                  >
                    <TableCell className="pl-10 py-8">
                      {index === 0 ? (
                        <Medal className="h-6 w-6 text-amber-500" />
                      ) : index === 1 ? (
                        <Medal className="h-6 w-6 text-slate-400" />
                      ) : index === 2 ? (
                        <Medal className="h-6 w-6 text-amber-700" />
                      ) : (
                        <span className="font-black text-slate-300 text-xl">
                          #{index + 1}
                        </span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                          {hunter.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">
                            {hunter.name}
                          </p>
                          <p className="text-xs text-slate-400 font-medium">
                            Joined{" "}
                            {new Date(hunter.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {JSON.parse(hunter.badges || "[]").map(
                          (badge: string) => (
                            <Badge
                              key={badge}
                              className="bg-indigo-50 text-indigo-700 border-indigo-100 text-[10px] font-bold"
                            >
                              {badge}
                            </Badge>
                          ),
                        )}
                        {JSON.parse(hunter.badges || "[]").length === 0 && (
                          <span className="text-slate-300 text-xs italic">
                            Forensic Resident
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell className="pr-10 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                        <span className="font-black text-2xl text-slate-900">
                          {hunter.reputationPoints}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <footer className="mt-16 text-center">
          <p className="text-slate-400 font-medium italic">
            "Accuracy is the only currency in the Marketplace of Truth." -
            CoVounding
          </p>
        </footer>
      </main>
    </div>
  );
}

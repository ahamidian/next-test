import { Alert, AlertDescription, AlertTitle } from "@/components/ui/Alert";
import { redis } from "@/lib/redis";
import { allLinks } from "@/app/api/links/route";

export default async function Home() {
  // const x= use( api.test.query({text:"amirhossein"}))

  const items = allLinks.map(async (link) => {
      const impressions: Map<string, string> = await redis.hgetall(`impr:${link}`);
      //add values of impressions
      let totalImpressions = 0;
      Object.values(impressions).forEach((impression) => totalImpressions += parseInt(impression));
      return (
        <div key={link}>
          <h1 className="text-xl font-bold">{link + " : " + totalImpressions}</h1>
          {/*<p>{JSON.stringify(impressions)}</p>*/}
        </div>
      )
    }
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {items}
      <Alert variant="destructive">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </main>
  )
}

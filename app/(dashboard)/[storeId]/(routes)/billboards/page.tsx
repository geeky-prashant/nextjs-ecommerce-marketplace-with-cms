import { prismadb } from "@/lib/prismadb";
import BillboardClient from "./_components/billboard-client";

const Billboards = async ({
  params
}: {
  params: {
    storeId: string
  }
}) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId
    }
  })
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={billboards} />
      </div>
    </div>
  )
}

export default Billboards;
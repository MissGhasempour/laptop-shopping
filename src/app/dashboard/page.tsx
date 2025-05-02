import Dashboard from "@/components/dashboard/dashboard";
import getProducts from "@/lib/api/getProducts";

export default async function Page () {
    const res = await getProducts();
    return <Dashboard res={res} />
}
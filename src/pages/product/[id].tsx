import { useRouter } from "next/router"

export default function Product() {
  const { query } = useRouter();
  return (
    <h1>Teste Product {JSON.stringify(query)}</h1>
  )
}
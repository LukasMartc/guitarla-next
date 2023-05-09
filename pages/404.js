import Layout from "../components/layout"
import Link from "next/link"

export default function Pagina404() {
  return (
    <Layout
        title="Página no Encontrada"
        description="Página no encontrada, error 404, GuitarLA"
    >
        <p className="error">Página no Encontrada</p>
        <Link href='/' legacyBehavior>
            <a className="error-enlace">Ir a inicio</a>
        </Link>
    </Layout>
  )
}
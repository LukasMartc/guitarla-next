import Image from "next/image"
import styles from "../../styles/guitarras.module.css"
import Layout from "../../components/layout"

export default function Porducto({ guitarra }) {
  const { nombre, description, imagen, precio } = guitarra[0].attributes
  return (
    <Layout
      title={`Guitarra ${nombre}`}
      description={`Guitarra ${nombre}, venta de guitarras, guitarLA`}
    >
      <div className={styles.guitarra}>
        <Image src={imagen.data.attributes.url} width={600} height={400} alt={`Imagen guitarra ${nombre}`} />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{description}</p>
          <p className={styles.precio}>${precio}</p>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json();
  return {
    props: {
      guitarra
    }
  }
}

/* export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json();
  return {
    props: {
      guitarra
    }
  }
} */
import Layout from "../components/layout"
import Image from "next/image"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title='Nosotros'
      description='Sobre nosotros, guitarLA, tienda de música'
    >
      <main className="contenedor">
        <h1 className="heading">Nosotros</h1>
        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt="Imagen sobre nosotros" />
          <div>
            <p>
              Suspendisse vestibulum imperdiet ante, ut porta neque tristique sed. Suspendisse elementum mollis tellus id sagittis. Aenean nisi magna, commodo sit amet sollicitudin sed, scelerisque a eros malesuada dictum felis. Maecenas maximus fermentum lectus, non cursus urna mollis eu. Nullam id ligula eu risus euismod rhoncus non in erat. Nunc malesuada dictum felis vitae ultrices.
            </p>
            <p>
              Duis blandit, ipsum eu vehicula molestie, urna dui tincidunt mi, ut sollicitudin diam ex in ligula. Curabitur et metus fermentum, dictum felis quis, pellentesque quam. Vivamus a pharetra sem. Nam malesuada ultrices ligula, id euismod mauris commodo ut. Mauris non ullamcorper augue. Donec tellus enim, dapibus eu ullamcorper a, commodo quis tellus.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

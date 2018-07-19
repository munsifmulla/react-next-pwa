import Head from 'next/head'
import Nav from '../components/common/Navigation'
import baseStyles from 'styles/style.scss'

export default props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" sizes="36x36" href="https://d2407na1z3fc0t.cloudfront.net/Banner/lic.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="https://d2407na1z3fc0t.cloudfront.net/Banner/lic.png" />
      <link rel="icon" type="image/png" sizes="72x72" href="https://d2407na1z3fc0t.cloudfront.net/Banner/lic.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="https://d2407na1z3fc0t.cloudfront.net/Banner/lic.png" />
      <link rel="icon" type="image/png" sizes="144x144" href="https://d2407na1z3fc0t.cloudfront.net/Banner/lic.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileImage" content="https://d2407na1z3fc0t.cloudfront.net/Banner/lic.png"/>
    </Head>

    <Nav/>

      {props.children}

    <style jsx global>
      {baseStyles}
    </style>

    <footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/2.1.6/jquery.cycle2.js"></script>

      {/*Maps*/}
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxCUFRpqhv_ddrIDYagEAEPe-Q_bx6KZs&libraries=places"
              async defer></script>

    </footer>
  </div>
)

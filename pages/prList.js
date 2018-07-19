import Layout from '../Layouts/layout'
import {withRouter} from 'next/router'
import Prod from '../components/prodLilst'

const prList = withRouter((props) => (
  <Layout>
    <Prod pr_name={props.router.query.pr_name} cat_name={props.router.query.cat_name}/>
  </Layout>
))

export default prList;
import Layout from '../Layouts/layout'
import {withRouter} from 'next/router'
import CatList from '../components/catLilst'

const catList = withRouter((props) => (
  <Layout>
    <CatList pr_name={props.router.query.cat_name}/>
  </Layout>
))

export default catList;